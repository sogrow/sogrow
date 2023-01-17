import { UserPlan, UserRole } from '@sogrow/services/domain/bom'

export interface UserContext {
  userId: string
  email: string
  userRole: UserRole
  userPlan: UserPlan
  locale: string
  country: string
  timeZone: string
}
