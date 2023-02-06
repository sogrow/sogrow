import useTranslation from 'next-translate/useTranslation'
import { Button, TextInput } from 'flowbite-react'
import { useState } from 'react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid'
import { SlideOver } from '@sogrow/ui/shared-webcomponents'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const days = {
  monday: 'mo',
  tuesday: 'tue',
  wednesday: 'wed',
  thursday: 'thur',
  friday: 'fr',
  saturday: 'sat',
  sunday: 'sun',
}

export function AutoSlots() {
  const { t } = useTranslation('common')
  const [postFrequency, setPostFrequency] = useState(1)
  const [postBasis, setPostBasis] = useState()
  const [postDays, setPostDays] = useState([])
  const [showSlideOver, setShowSlideOver] = useState(false)

  const postingBasis: PostBasis[] = [
    {
      id: 'DAILY',
      title: t('setup_slots_auto_writing_basis_daily_title'),
    },
    {
      id: 'WEEKLY',
      title: t('setup_slots_auto_writing_basis_weekly_title'),
    },
  ]

  const changePostFrequency = (frequency) => {
    frequency = parseInt(frequency)
    if (frequency < 0 || frequency > 6) {
      return
    }

    setPostFrequency(frequency)

    if (postBasis === 'WEEKLY') {
      setPostDays(postDays.slice(0, frequency))
    }
    if (frequency === 0) {
      setPostBasis(null)
    }
  }

  const increasePostFrequency = () => {
    changePostFrequency(postFrequency + 1)
  }

  const decreasePostFrequency = () => {
    changePostFrequency(postFrequency - 1)
  }

  const changePostBasis = (basis) => {
    setPostBasis(basis)
    if (basis === 'WEEKLY') {
      setPostDays(postDays.slice(0, postFrequency))
    }
  }

  const togglePostDay = (day) => {
    if (postDays.includes(day)) {
      setPostDays(postDays.filter((d) => d !== day))
    } else {
      setPostDays([...postDays, day])
    }
  }

  const shouldDisableDay = (day) => {
    if (postFrequency === 0 || !postBasis) {
      return true
    }
    if (postBasis === 'DAILY') {
      return false
    }
    if (postDays?.length !== postFrequency) {
      return false
    }
    return !postDays.includes(day)
  }

  const onSlideOverClose = () => {
    console.log('close')
    setShowSlideOver(false)
  }

  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="font-grotesk flex pb-6 text-xl">
        {t('setup_slots_headline_auto')}
        <InformationCircleIcon className="ml-2 h-6 w-6 cursor-pointer text-violet-600" onClick={() => setShowSlideOver(true)} />
      </h1>
      <div className="sm:w-1/2 lg:w-2/3">
        <p className="pb-4">{t('setup_slots_auto_writing_cadence')}</p>
        <div className="flex space-x-2 pb-8 lg:w-1/2">
          <TextInput
            className="w-full"
            type="number"
            value={postFrequency}
            placeholder="1-6"
            required
            onChange={(e) => changePostFrequency(e.target.value)}
            min={0}
            max={6}
          />
          <div className="flex space-x-2">
            <Button pill color="lightViolet" onClick={decreasePostFrequency} disabled={postFrequency === 0}>
              <MinusIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button pill color="lightViolet" onClick={increasePostFrequency} disabled={postFrequency === 6}>
              <PlusIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <p className="pb-4">{t('setup_slots_auto_writing_basis')}</p>
        <ul className="grid w-full grid-cols-2 gap-2  pb-8">
          {postingBasis.map((basis) => (
            <li key={basis.id}>
              <input
                id={basis.id}
                className="peer hidden"
                type="radio"
                name="slot-preference"
                value={basis.id}
                checked={postBasis === basis.id}
                onChange={() => changePostBasis(basis.id)}
                disabled={postFrequency === 0}
                required
              />
              <label
                htmlFor={basis.id}
                className="group inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-zinc-900 hover:bg-violet-100 hover:text-gray-600 peer-checked:border-violet-600 peer-checked:bg-violet-50 peer-checked:text-violet-600 peer-disabled:cursor-not-allowed peer-disabled:border-zinc-300 peer-disabled:bg-zinc-300 peer-disabled:text-white"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">{basis.title}</div>
                </div>
              </label>
            </li>
          ))}
        </ul>
        <p className="pb-4">{t('setup_slots_auto_writing_days')}</p>
        <ul className="flex flex-wrap">
          {Object.values(days).map((day) => (
            <li key={day} className="mr-2 mb-2">
              <input
                type="checkbox"
                id={day}
                className="peer hidden"
                checked={postDays.includes(day)}
                value={day}
                onChange={() => togglePostDay(day)}
                disabled={shouldDisableDay(day)}
              />
              <label
                htmlFor={day}
                className="inline-flex cursor-pointer items-center justify-between rounded-full border border-gray-200 bg-zinc-50 py-2 px-4 text-zinc-900 hover:bg-violet-50 hover:text-violet-600 peer-checked:border-violet-600 peer-checked:bg-violet-600 peer-checked:text-white peer-disabled:cursor-not-allowed peer-disabled:border-zinc-300 peer-disabled:bg-zinc-300 peer-disabled:text-white"
              >
                <div className="w-full px-1 text-sm font-medium">{t(day)}</div>
              </label>
            </li>
          ))}
        </ul>
        <SlideOver isOpen={showSlideOver} title={t('setup_slots_auto_help_title')} onClose={onSlideOverClose}>
          <p className="text-sm text-gray-500">{t('setup_slots_auto_help_description')}</p>
        </SlideOver>
      </div>
    </div>
  )
}

type PostBasis = {
  id: string
  title: string
}

export default AutoSlots
