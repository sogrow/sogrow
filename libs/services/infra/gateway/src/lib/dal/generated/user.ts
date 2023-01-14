import { Account } from './account'
import { Session } from './session'
import { Feedback } from './feedback'
import { SocialAccount } from './social_account'
import { Slot } from './slot'
import { Post } from './post'
import { UserPlan, UserRole } from '@prisma/client'

export class User {
  id: string

  name?: string

  email?: string

  emailVerified?: Date

  image?: string

  trialEndsAt?: Date

  completedOnboarding: boolean

  userPlan: UserPlan = UserPlan.TRIAL

  userRole: UserRole = UserRole.USER

  locale?: string

  country?: string

  timeZone?: string

  followersCount: number

  accounts: Account[]

  sessions: Session[]

  feedback: Feedback[]

  socialAccounts: SocialAccount[]

  slots: Slot[]

  posts: Post[]

  updatedAt: Date

  createdAt: Date
}
