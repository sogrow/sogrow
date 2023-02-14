import { Weekday } from './WeekDay'
import { SlotType } from './SlotType'

export class Slot {
  id?: string
  userId: string
  type: SlotType
  day: Weekday
  time?: string
  relativeTimeStart?: string
  relativeTimeEnd?: string
}
