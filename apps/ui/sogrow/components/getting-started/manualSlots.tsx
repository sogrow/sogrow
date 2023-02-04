import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { Button, TextInput } from 'flowbite-react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { getTimeZoneAwareRandomTimeBetween } from '../../utils/timeUtils'

type Slot = {
  id: string
  manuallyEdited?: boolean
  publishTime: string
}

type WeekDay =
  | { day: 'monday' }
  | { day: 'tuesday' }
  | { day: 'wednesday' }
  | { day: 'thursday' }
  | { day: 'friday' }
  | { day: 'saturday' }
  | { day: 'sunday' }

type SlotSettings = {
  [Weekday in WeekDay['day']]: {
    day: Weekday
    slots?: Slot[]
  }
}

const initialSlotSettings: SlotSettings = {
  monday: {
    day: 'monday',
  },
  tuesday: {
    day: 'tuesday',
  },
  wednesday: {
    day: 'wednesday',
  },
  thursday: {
    day: 'thursday',
  },
  friday: {
    day: 'friday',
  },
  saturday: {
    day: 'saturday',
  },
  sunday: {
    day: 'sunday',
  },
}

const randomTimeRange = {
  1: [{ startTime: '07:00', endTime: '22:00' }],
  2: [
    { startTime: '07:00', endTime: '12:00' },
    { startTime: '13:00', endTime: '22:00' },
  ],
  3: [
    { startTime: '07:00', endTime: '11:00' },
    { startTime: '12:00', endTime: '16:00' },
    { startTime: '17:00', endTime: '22:00' },
  ],
  4: [
    { startTime: '07:00', endTime: '10:00' },
    { startTime: '11:00', endTime: '14:00' },
    { startTime: '15:00', endTime: '18:00' },
    { startTime: '19:00', endTime: '22:00' },
  ],
  5: [
    { startTime: '07:00', endTime: '09:00' },
    { startTime: '10:00', endTime: '12:00' },
    { startTime: '13:00', endTime: '15:00' },
    { startTime: '16:00', endTime: '18:00' },
    { startTime: '19:00', endTime: '21:00' },
  ],
}

const MAX_POSTS_PER_DAY = 5

export function ManualSlots() {
  const { t } = useTranslation('common')
  const { data: session } = useSession()
  const [slotSettings, setSlotSettings] = useState<SlotSettings>(initialSlotSettings)

  const addSlot = (day: WeekDay['day']) => {
    const newSlotSettings = { ...slotSettings }
    if (newSlotSettings[day].slots) {
      const slotNumber = newSlotSettings[day].slots?.length
      const newSlots = []
      for (let i = 0; i <= newSlotSettings[day].slots.length; i++) {
        const availableSlot = newSlotSettings[day].slots[i]
        if (availableSlot && availableSlot.manuallyEdited) {
          newSlots.push(availableSlot)
        } else {
          const publishTime = {
            ...randomTimeRange[slotNumber + 1][i],
            timeZone: session?.user?.timeZone || 'Europe/Berlin',
          }
          const newSlot = {
            id: Math.random().toString(36).substr(2, 9),
            publishTime: getTimeZoneAwareRandomTimeBetween(publishTime),
          }
          newSlots.push(newSlot)
        }
      }
      newSlotSettings[day].slots = newSlots.sort((a, b) => a.publishTime.localeCompare(b.publishTime))
    } else {
      const slotNumber = 0
      const publishTime = {
        ...randomTimeRange[slotNumber + 1][slotNumber],
        timeZone: session?.user?.timeZone || 'Europe/Berlin',
      }
      const newSlot = {
        id: Math.random().toString(36).substr(2, 9),
        publishTime: getTimeZoneAwareRandomTimeBetween(publishTime),
      }
      newSlotSettings[day].slots = [newSlot]
    }

    setSlotSettings(newSlotSettings)
  }

  const changeSlot = (day: WeekDay['day'], slotId: string, value: string) => {
    const newSlotSettings = { ...slotSettings }
    newSlotSettings[day].slots = newSlotSettings[day].slots?.map((slot) => {
      if (slot.id === slotId) {
        return {
          ...slot,
          manuallyEdited: true,
          publishTime: value,
        }
      }
      return slot
    })
    setSlotSettings(newSlotSettings)
  }

  const removeSlot = (day: WeekDay['day'], slotId: string) => {
    const newSlotSettings = { ...slotSettings }
    newSlotSettings[day].slots = newSlotSettings[day].slots?.filter((slot) => slot.id !== slotId)
    setSlotSettings(newSlotSettings)
  }

  const sortSlots = (day: WeekDay['day']) => {
    const newSlotSettings = { ...slotSettings }
    newSlotSettings[day].slots = newSlotSettings[day].slots?.sort((a, b) => a.publishTime.localeCompare(b.publishTime))
    setSlotSettings(newSlotSettings)
  }

  return (
    <div className="grid grid-cols-1 divide-y">
      {Object.entries(slotSettings).map(([key, value]) => (
        <div key={key}>
          <div className="flex items-center justify-between">
            <div className="py-4 text-sm text-gray-900">{t(value.day)}</div>
            <Button pill color="lightViolet" onClick={() => addSlot(value.day)} disabled={value.slots?.length === MAX_POSTS_PER_DAY}>
              <PlusIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
          <div className="scrollbar-hide flex space-x-2 overflow-x-auto">
            {value.slots?.map((slot) => (
              <div key={slot.id} className="pb-2">
                <TextInput
                  className="w-fit flex-row-reverse"
                  id={slot.id}
                  type="time"
                  value={slot.publishTime}
                  required
                  onChange={(e) => changeSlot(value.day, slot.id, e.target.value)}
                  onBlur={() => sortSlots(value.day)}
                  addon={
                    <button className="min-h-full w-full px-3" onClick={() => removeSlot(value.day, slot.id)}>
                      <TrashIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                  }
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ManualSlots
