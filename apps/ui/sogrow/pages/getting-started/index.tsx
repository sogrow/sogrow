import useTranslation from 'next-translate/useTranslation'
import { Button } from 'flowbite-react'

export function OnboardingPage() {
  const { t } = useTranslation('common')

  const slots = [
    {
      id: 'auto',
      title: t('slot_preference_auto_title'),
      description: t('slot_preference_auto_description'),
    },
    {
      id: 'manual',
      title: t('slot_preference_manual_title'),
      description: t('slot_preference_manual_description'),
    },
  ]

  return (
    <section className="pt-8">
      <h1 className="font-grotesk pb-6 text-xl">{t('slot_preference_headline')}</h1>
      <ul className="mb-8 grid w-full gap-2 lg:grid-cols-2">
        {slots.map((slot) => (
          <li key={slot.id}>
            <input type="radio" id={slot.id} name="slot-preference" value={slot.id} className="peer hidden" required />
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
      <div className="flex items-center justify-between">
        <span className="pl-4 text-sm text-zinc-600">1/2</span>
        <Button color="purple" pill>
          {t('slot_preference_button_next_label')}
        </Button>
      </div>
    </section>
  )
}

export default OnboardingPage
