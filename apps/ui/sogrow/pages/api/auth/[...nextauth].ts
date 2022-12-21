import NextAuth, { NextAuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import SogrowAdapter from '../../../lib/next-auth-custom-adapter'
import SogrowClient from '../../../lib/sogrow-client'
import * as process from 'process'

const sogrowBaseURL = process.env.BASE_URL_IDENTITY

const sogrowClient = new SogrowClient({ baseURL: sogrowBaseURL, validateStatus: (status: number) => status >= 200 && status < 300 })
const sogrowAdapter = SogrowAdapter(sogrowClient)

export const authOption: NextAuthOptions = {
  adapter: sogrowAdapter,
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signin', { user, account, profile, email, credentials })
      return true
    },
    async redirect({ url, baseUrl }) {
      console.log('redirect', { url, baseUrl })
      return baseUrl
    },
    async session({ session, user, token }) {
      console.log('session', { session, user, token })
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('jwt', { token, user, account, profile, isNewUser })
      return token
    },
  },
}

export default NextAuth(authOption)
