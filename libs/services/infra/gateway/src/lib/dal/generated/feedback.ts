import { User } from './user'
import { CSAT } from '@prisma/client'

export class Feedback {
  id: string

  userId?: string

  user?: User

  csat: CSAT

  message?: string

  createdAt: Date
}
