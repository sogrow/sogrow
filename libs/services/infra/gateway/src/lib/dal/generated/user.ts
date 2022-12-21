import { Account } from './account'
import { Session } from './session'

export class User {
  id: string

  name?: string

  email?: string

  emailVerified?: Date

  image?: string

  accounts: Account[]

  sessions: Session[]
}
