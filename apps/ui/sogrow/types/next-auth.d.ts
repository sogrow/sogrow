import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user']
    expires: DefaultSession['expires']
    accessToken: string
  }
}
