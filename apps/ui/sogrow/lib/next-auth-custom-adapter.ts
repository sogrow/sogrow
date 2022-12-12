import { Adapter, AdapterSession } from 'next-auth/adapters'
import SogrowClient from './sogrow-client'

export default function SogrowAdapter(client: SogrowClient, options = {}): Adapter {
  return {
    async createUser(user) {
      return client.createUser(user)
    },
    async getUser(id) {
      return client.getUser(id)
    },
    async getUserByEmail(email) {
      return client.getUserByEmail(email)
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return client.getUserByAccountId(providerAccountId, provider)
    },
    async updateUser(user) {
      return client.updateUser(user)
    },
    async deleteUser(userId) {
      return client.deleteUser(userId)
    },
    async linkAccount(account) {
      return client.linkAccount(account)
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return client.unlinkAccount(providerAccountId, provider)
    },
    async createSession(session: { sessionToken: string; userId: string; expires: Date }) {
      return client.createSession(session)
    },
    async getSessionAndUser(sessionToken) {
      return client.getSessionAndUser(sessionToken)
    },
    async updateSession(session: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>) {
      return client.updateSession(session)
    },
    async deleteSession(sessionToken) {
      return client.deleteSession(sessionToken)
    },
  }
}
