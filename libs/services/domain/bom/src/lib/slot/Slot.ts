import { WeekDay } from './WeekDay'
import { TimeOfDay } from './TimeOfDay'
import { SlotType } from './SlotType'

export class Slot {
  id?: string
  type: SlotType
  day: WeekDay
  timeOfDay: TimeOfDay
  time?: string
  relativeTimeStart?: string
  relativeTimeEnd?: string
}
