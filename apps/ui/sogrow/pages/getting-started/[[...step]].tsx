import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Head from 'next/head'
import SlotPreferences from '../../components/getting-started/slotPreferences'
import { Button } from 'flowbite-react'
import { SlotPreference } from '@sogrow/services/domain/bom'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { useGetUserSettings } from '../../api/user-settings'

const INITIAL_STEP = 'slot-preference'
const steps = ['slot-preference', 'setup-auto-slots', 'setup-manually-slots'] as const

const stepTransform = (step: typeof steps[number]) => {
  const stepIndex = steps.indexOf(step)
  if (stepIndex > -1) {
    return steps[stepIndex]
  }
  return INITIAL_STEP
}

const stepRouteSchema = z.object({
  step: z.array(z.enum(steps)).default([INITIAL_STEP]),
})

export function OnboardingPage() {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { data: userSettings } = useGetUserSettings()
  const [slotPreference, setSlotPreference] = useState<SlotPreference>(null)

  const result = stepRouteSchema.safeParse(router.query)
  const currentStep = result.success ? result.data.step[0] : INITIAL_STEP
  const currentStepIndex = steps.indexOf(currentStep)

  const headers = [
    {
      title: t('setup_slot_preference_headline'),
      buttonNextLabel: t('setup_slots_button_next_label'),
    },
    {
      title: t('setup_slots_headline_auto'),
      buttonPreviousLabel: t('setup_slots_button_previous_label'),
      buttonNextLabel: t('setup_slots_button_finish_label'),
    },
    {
      title: t('setup_slots_headline_manual'),
      buttonPreviousLabel: t('setup_slots_button_previous_label'),
      buttonNextLabel: t('setup_slots_button_finish_label'),
    },
  ]

  useEffect(() => {
    if (userSettings?.slotPreference) {
      setSlotPreference(SlotPreference[userSettings.slotPreference])
    }
  }, [userSettings])

  const goToIndex = (index: number) => {
    const newStep = steps[index]
    router.push(
      {
        pathname: `/getting-started/${stepTransform(newStep)}`,
      },
      undefined,
    )
  }

  const onSlotPreferenceChange = (slotPreference: SlotPreference) => {
    setSlotPreference(slotPreference)
  }

  const onPrevious = () => {
    goToIndex(0)
  }

  const onNext = () => {
    if (slotPreference === SlotPreference.AUTO) {
      goToIndex(1)
    } else if (slotPreference === SlotPreference.MANUAL) {
      goToIndex(2)
    }
  }

  const getCurrentStepIndex = () => {
    const currentStep = result.success ? result.data.step[0] : INITIAL_STEP
    const currentIndexOfStep = steps.indexOf(currentStep)
    return currentIndexOfStep === 2 ? 2 : currentIndexOfStep + 1
  }

  return (
    <div>
      <Head>
        <title>Sogrow - {t('getting_started')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="py-8 md:pt-40 md:pb-4">
        <h1 className="font-grotesk pb-6 text-xl">{headers[currentStepIndex]?.title || 'Undefined Title'}</h1>
        {currentStep === 'slot-preference' && <SlotPreferences onSlotPreferenceChange={onSlotPreferenceChange} />}
        {currentStep === 'setup-auto-slots' && <div>Auto Slots</div>}
        {currentStep === 'setup-manually-slots' && <div>Manual Slots</div>}
        <div className="flex items-center justify-between">
          <span className="pl-4 text-sm text-zinc-600">{getCurrentStepIndex()}/2</span>
          <div className="flex">
            {headers[currentStepIndex]?.buttonPreviousLabel && (
              <Button className="mr-4" color="gray" pill onClick={onPrevious}>
                {headers[currentStepIndex]?.buttonPreviousLabel}
              </Button>
            )}
            <Button color="purple" pill onClick={onNext}>
              {headers[currentStepIndex]?.buttonNextLabel}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OnboardingPage
