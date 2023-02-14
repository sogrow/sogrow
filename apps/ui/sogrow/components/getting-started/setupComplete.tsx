import useTranslation from 'next-translate/useTranslation'
import { CheckIcon } from '@heroicons/react/24/outline'
import { Button } from 'flowbite-react'

export function SetupComplete() {
  const { t } = useTranslation('common')

  return (
    <section className="flex h-full flex-col items-center justify-center">
      <div className="mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100 p-4">
        <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
      </div>
      <p className="mb-24	">{t('setup_complete_headline')}</p>
      <div className="flex w-full flex-col items-center space-y-2">
        <Button className="w-full md:w-1/5" color="primary" pill>
          {t('setup_complete_create_first_post')}
        </Button>
        <Button className="w-full md:w-1/5" color="secondary" pill>
          {t('setup_complete_see_schedule')}
        </Button>
      </div>
    </section>
  )
}

export default SetupComplete
