import { SlotPreference } from '@sogrow/services/domain/bom'
import { useGetUserSettings, useUpdateUserSettings } from '../../api/user-settings'
import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Button, Spinner } from 'flowbite-react'

export type SlotPreferencesProps = {
  onSlotPreferenceChange?: (slotPreference: SlotPreference) => void
  onNext?: () => void
}

export function SlotPreferences({ onSlotPreferenceChange, onNext }: SlotPreferencesProps) {
  const { t } = useTranslation('common')
  const { data: userSettings, isLoading } = useGetUserSettings()
  const [slotPreference, setSlotPreference] = useState<SlotPreference>()

  const mutateUserSettings = useUpdateUserSettings()

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

  const onChange = async (slotPreference: SlotPreference) => {
    await mutateUserSettings.mutate({ ...userSettings, slotPreference: SlotPreference[slotPreference] })
    onSlotPreferenceChange?.(slotPreference)
  }

  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="font-grotesk flex pb-6 text-xl">{t('setup_slot_preference_headline')}</h1>
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
      <div className="mt-8 flex items-center justify-between">
        <span className="pl-4 text-sm text-zinc-600">1/2</span>
        <div className="flex">
          <Button color="primary" pill onClick={onNext} disabled={isLoading || !slotPreference}>
            {isLoading && (
              <div className="mr-3">
                <Spinner color="violet" size="sm" light={true} />
              </div>
            )}
            {t('setup_slots_button_next_label')}
          </Button>
        </div>
      </div>
    </div>
  )
}

type Slot = {
  id: string
  title: string
  description: string
}

export default SlotPreferences
