import useTranslation from 'next-translate/useTranslation'

export function AutoSlots() {
  const { t } = useTranslation('common')

  return (
    <div>
      <h2>Auto Slots</h2>
    </div>
  )
}

export default AutoSlots
