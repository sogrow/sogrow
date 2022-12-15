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
}

export default NextAuth(authOption)
