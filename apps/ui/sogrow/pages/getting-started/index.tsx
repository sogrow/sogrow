import useTranslation from 'next-translate/useTranslation'

export function OnboardingPage() {
  const { t } = useTranslation('common')

  return (
    <section className="pt-8">
      <h1 className="font-grotesk text-xl">{t('slot_preference_headline')}</h1>
    </section>
  )
}

export default OnboardingPage
