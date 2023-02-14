import moment from 'moment-timezone'

export const getTimeZoneAwareRandomTimeBetween = ({ startTime, endTime, timeZone }) => {
  const start = moment.tz(`1970-01-01 ${startTime}`, timeZone)
  const end = moment.tz(`1970-01-01 ${endTime}`, timeZone)
  const diff = end.diff(start, 'minutes')
  const random = Math.floor(Math.random() * diff)
  return start.add(random, 'minutes').tz(timeZone).format('HH:mm')
}

export type WeekDay =
  | { day: 'monday' }
  | { day: 'tuesday' }
  | { day: 'wednesday' }
  | { day: 'thursday' }
  | { day: 'friday' }
  | { day: 'saturday' }
  | { day: 'sunday' }

export const randomTimeRange = {
  1: [{ startTime: '09:00', endTime: '12:00' }],
  2: [
    { startTime: '09:00', endTime: '12:00' },
    { startTime: '16:00', endTime: '19:00' },
  ],
  3: [
    { startTime: '07:00', endTime: '11:00' },
    { startTime: '12:00', endTime: '16:00' },
    { startTime: '17:00', endTime: '22:00' },
  ],
  4: [
    { startTime: '07:00', endTime: '10:00' },
    { startTime: '11:00', endTime: '14:00' },
    { startTime: '15:00', endTime: '18:00' },
    { startTime: '19:00', endTime: '22:00' },
  ],
  5: [
    { startTime: '07:00', endTime: '09:00' },
    { startTime: '10:00', endTime: '12:00' },
    { startTime: '13:00', endTime: '15:00' },
    { startTime: '16:00', endTime: '18:00' },
    { startTime: '19:00', endTime: '21:00' },
  ],
  6: [
    { startTime: '07:00', endTime: '8:30' },
    { startTime: '9:00', endTime: '10:30' },
    { startTime: '11:30', endTime: '13:00' },
    { startTime: '14:00', endTime: '15:30' },
    { startTime: '16:30', endTime: '18:00' },
    { startTime: '19:00', endTime: '20:30' },
  ],
}
