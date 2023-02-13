import useTranslation from 'next-translate/useTranslation'
import { useState } from 'react'
import { Button, TextInput } from 'flowbite-react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'
import { getTimeZoneAwareRandomTimeBetween, randomTimeRange, WeekDay } from '../../utils/timeUtils'

type Slot = {
  id: string
  manuallyEdited?: boolean
  publishTime: string
}

export type ManualSlotSettings = {
  [Weekday in WeekDay['day']]: {
    day: Weekday
    slots?: Slot[]
  }
}

const initialSlotSettings: ManualSlotSettings = {
  monday: {
    day: 'monday',
    slots: [],
  },
  tuesday: {
    day: 'tuesday',
    slots: [],
  },
  wednesday: {
    day: 'wednesday',
    slots: [],
  },
  thursday: {
    day: 'thursday',
    slots: [],
  },
  friday: {
    day: 'friday',
    slots: [],
  },
  saturday: {
    day: 'saturday',
    slots: [],
  },
  sunday: {
    day: 'sunday',
    slots: [],
  },
}

const MAX_POSTS_PER_DAY = 5

export type ManualSlotsProps = {
  onSlotsChange: (slotSettings: ManualSlotSettings) => void
  onNext?: () => void
  onPrevious?: () => void
}

export function ManualSlots({ onSlotsChange, onNext, onPrevious }: ManualSlotsProps) {
  const { t } = useTranslation('common')
  const { data: session } = useSession()
  const [slotSettings, setSlotSettings] = useState<ManualSlotSettings>(initialSlotSettings)

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
    onSlotsChange(newSlotSettings)
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
    onSlotsChange(newSlotSettings)
  }

  const removeSlot = (day: WeekDay['day'], slotId: string) => {
    const newSlotSettings = { ...slotSettings }
    newSlotSettings[day].slots = newSlotSettings[day].slots?.filter((slot) => slot.id !== slotId)
    setSlotSettings(newSlotSettings)
    onSlotsChange(newSlotSettings)
  }

  const sortSlots = (day: WeekDay['day']) => {
    const newSlotSettings = { ...slotSettings }
    newSlotSettings[day].slots = newSlotSettings[day].slots?.sort((a, b) => a.publishTime.localeCompare(b.publishTime))
    setSlotSettings(newSlotSettings)
    onSlotsChange(newSlotSettings)
  }

  return (
    <div className="flex h-full flex-col md:mt-40">
      <h1 className="font-grotesk flex pb-6 text-xl">{t('setup_slots_headline_manual')}</h1>
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
      <div className="mt-8 flex items-center justify-between">
        <span className="pl-4 text-sm text-zinc-600">2/2</span>
        <div className="flex">
          <Button className="mr-4" color="secondary" pill onClick={onPrevious}>
            {t('setup_slots_button_previous_label')}
          </Button>
          <Button color="primary" pill onClick={onNext}>
            {t('setup_slots_button_finish_label')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ManualSlots
