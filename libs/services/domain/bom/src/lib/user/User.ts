import { UserPlan } from './UserPlan'
import { UserRole } from './UserRole'
import { TrialEndDate } from './TrialEndDate'

export class User {
  id: string
  name: string
  email?: string
  username?: string
  image: string

  completedOnboarding = false

  userPlan: UserPlan
  userRole: UserRole

  locale?: string
  country?: string
  timeZone?: string

  followersCount?: number

  trialEndsAt?: TrialEndDate

  calculateTrialEndsAt(followersCount: number) {
    if (followersCount >= 1000) {
      this.trialEndsAt = TrialEndDate.fromDay(14)
    }
    this.trialEndsAt = TrialEndDate.fromDay(90)
  }
}
