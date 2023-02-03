import { SlotPreference } from '@sogrow/services/domain/bom'
import { useGetUserSettings, useUpdateUserSettings } from '../../api/user-settings'
import { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

export type SlotPreferencesProps = {
  onSlotPreferenceChange?: (slotPreference: SlotPreference) => void
}

export function SlotPreferences({ onSlotPreferenceChange }: SlotPreferencesProps) {
  const { t } = useTranslation('common')
  const { data: userSettings } = useGetUserSettings()
  const [slotPreference, setSlotPreference] = useState<SlotPreference>()

  useEffect(() => {
    if (userSettings?.slotPreference) {
      setSlotPreference(SlotPreference[userSettings.slotPreference])
    }
  }, [userSettings])

  const slots: Slot[] = [
    {
      id: 'AUTO',
      title: t('slot_preference_auto_title'),
      description: t('slot_preference_auto_description'),
    },
    {
      id: 'MANUAL',
      title: t('slot_preference_manual_title'),
      description: t('slot_preference_manual_description'),
    },
  ]

  const mutateUserSettings = useUpdateUserSettings()

  const onChange = async (slotPreference: SlotPreference) => {
    await mutateUserSettings.mutate({ ...userSettings, slotPreference: SlotPreference[slotPreference] })
    onSlotPreferenceChange?.(slotPreference)
  }

  return (
    <ul className="grid w-full gap-2 lg:grid-cols-2">
      {slots.map((slot) => (
        <li key={slot.id}>
          <input
            id={slot.id}
            className="peer hidden"
            type="radio"
            name="slot-preference"
            value={slot.id}
            checked={slotPreference === slot.id}
            onChange={() => onChange(SlotPreference[slot.id])}
            required
          />
          <label
            htmlFor={slot.id}
            className="group inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-zinc-900 hover:bg-violet-100 hover:text-gray-600 peer-checked:border-violet-600 peer-checked:bg-violet-50 peer-checked:text-violet-600"
          >
            <div className="block">
              <div className="mb-2 w-full text-lg font-semibold">{slot.title}</div>
              <div className="group-peer-checked:text-violet-600 w-full text-zinc-700">{slot.description}</div>
            </div>
          </label>
        </li>
      ))}
    </ul>
  )
}

type Slot = {
  id: string
  title: string
  description: string
}

export default SlotPreferences
