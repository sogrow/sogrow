import { UserPlan } from './UserPlan'
import { UserRole } from './UserRole'

export class User {
  id: string
  name: string
  email?: string
  username?: string
  picture: string

  completedOnboarding = false

  userPlan: UserPlan
  userRole: UserRole

  locale?: string
  country?: string
  timeZone?: string

  followersCount?: number
}
