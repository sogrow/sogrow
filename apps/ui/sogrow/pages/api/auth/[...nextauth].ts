import NextAuth, { NextAuthOptions, Session } from 'next-auth'
import TwitterProvider from 'next-auth/providers/twitter'
import SogrowAdapter from '../../../lib/next-auth-custom-adapter'
import SogrowClient from '../../../lib/sogrow-client'
import * as process from 'process'
import { JWT } from 'next-auth/jwt'

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
    async signIn({ user, account }) {
      if (user) {
        const dbUser = await sogrowAdapter.getUser(user.id)

        if (dbUser) {
          await sogrowAdapter.linkAccount({
            ...account,
            userId: dbUser.id,
          })
        }
      }

      return true
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.accessToken = token.accessToken as string

      return session
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.accessToken = await sogrowClient.exchangeToken(account.providerAccountId, account.provider, account.access_token)
      }

      return token
    },
  },
}

export default NextAuth(authOption)
