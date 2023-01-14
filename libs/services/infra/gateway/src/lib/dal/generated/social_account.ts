import { User } from './user'
import { Account } from './account'

export class SocialAccount {
  id: string

  userId: string

  user: User

  account: Account

  accountId: string

  followersCount: number

  postsCount: number

  createdAt: Date

  updatedAt: Date
}
