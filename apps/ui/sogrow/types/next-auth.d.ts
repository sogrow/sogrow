import NextAuth, { DefaultSession } from 'next-auth'
import { User, UserPlan, UserRole } from '@sogrow/services/domain/bom'

declare module 'next-auth' {
  interface Session {
    user: User
    expires: DefaultSession['expires']
    accessToken: string
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    completedOnboarding: boolean
    userPlan: UserPlan
    userRole: UserRole
    locale?: string
    country?: string
    timeZone?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
    user: User
  }
}
