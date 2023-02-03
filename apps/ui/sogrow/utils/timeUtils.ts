import moment from 'moment-timezone'

export const getTimeZoneAwareRandomTimeBetween = ({ startTime, endTime, timeZone }) => {
  const start = moment.tz(`1970-01-01 ${startTime}`, timeZone)
  const end = moment.tz(`1970-01-01 ${endTime}`, timeZone)
  const diff = end.diff(start, 'minutes')
  const random = Math.floor(Math.random() * diff)
  return start.add(random, 'minutes').tz(timeZone).format('HH:mm')
}
