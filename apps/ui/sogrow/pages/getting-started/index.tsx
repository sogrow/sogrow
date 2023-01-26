import useTranslation from 'next-translate/useTranslation'

export function OnboardingPage() {
  const { t } = useTranslation('common')

  return (
    <section>
      <h1>{t('slot_preference_headline')}</h1>
    </section>
  )
}

export default OnboardingPage
