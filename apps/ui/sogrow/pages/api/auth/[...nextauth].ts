import NextAuth, { NextAuthOptions } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import SogrowAdapter from '../../../lib/next-auth-custom-adapter'

export const authOption: NextAuthOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: '2.0',
    }),
  ],
}

const sogrowAdapter = SogrowAdapter()
export default NextAuth({
  adapter: sogrowAdapter,
  providers: authOption.providers,
})
