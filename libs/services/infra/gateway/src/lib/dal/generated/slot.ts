import { User } from './user'
import { Weekday, TimeOfDay } from '@prisma/client'

export class Slot {
  id: string

  userId: string

  user: User

  day: Weekday

  time?: Date

  relativeTimeStart?: Date

  relativeTimeEnd?: Date

  timeOfDay?: TimeOfDay

  createdAt: Date

  updatedAt: Date
}
