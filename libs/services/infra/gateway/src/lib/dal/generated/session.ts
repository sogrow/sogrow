import { User } from './user'

export class Session {
  id: string

  sessionToken: string

  userId: string

  expires: Date

  user: User
}
