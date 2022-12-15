import axios, { AxiosInstance } from 'axios'
import { AdapterAccount, AdapterSession, AdapterUser } from 'next-auth/adapters'

export default class SogrowClient {
  private axios: AxiosInstance
  constructor(params: { baseURL: string; validateStatus: (status: number) => boolean }) {
    axios.create({
      baseURL: params.baseURL,
      validateStatus: params.validateStatus,
    })
  }

  createUser(user: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    console.log('createUser', { user })
    return this.axios.post(`/user/signup`, { data: user }).then((response) => {
      return response.data
    })
  }

  getUser(id: string): Promise<AdapterUser> {
    console.log('getUser', { id })
    return this.axios.get(`/user`, { params: { id } }).then((response) => {
      return response.data
    })
  }

  getUserByEmail(email: string): Promise<AdapterUser> {
    console.log('getUserByEmail', { email })
    return this.axios.get(`/user`, { params: { email } }).then((response) => {
      return response.data
    })
  }

  getUserByAccountId(providerAccountId: string, provider: string): Promise<AdapterUser> {
    console.log('getUserByAccountId', { providerAccountId }, { provider })
    return this.axios.get(`/account`, { params: { providerAccountId, provider } }).then((response) => {
      return response.data
    })
  }

  updateUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
    console.log('updateUser', { user })
    return this.axios.put(`/user/${user.id}`, { data: user }).then((response) => {
      return response.data
    })
  }

  deleteUser(userId: string): Promise<AdapterUser> {
    console.log('deleteUser', { userId })
    return this.axios.delete(`/user/${userId}`).then((response) => {
      return response.data
    })
  }

  linkAccount(account: AdapterAccount) {
    console.log('linkAccount', { account })
    return this.axios.post(`/account`, { data: account }).then((response) => {
      return response.data
    })
  }

  unlinkAccount(providerAccountId: string, provider: string): Promise<AdapterAccount> {
    console.log('unlinkAccount', { providerAccountId }, { provider })
    return this.axios.delete(`/account`, { params: { providerAccountId, provider } })
  }

  createSession(session: { sessionToken: string; userId: string; expires: Date }): Promise<AdapterSession> {
    console.log('createSession', { session })
    return this.axios.post(`/session`, { data: session })
  }

  getSessionAndUser(sessionToken: string): Promise<{ session: AdapterSession; user: AdapterUser }> {
    console.log('getSessionAndUser', { sessionToken })
    return this.axios.get(`/session`, { params: { sessionToken } }).then((response) => {
      return response.data
    })
  }

  updateSession(session: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>): Promise<AdapterSession> {
    console.log('updateSession', { session })
    return this.axios.put(`/session/${session.userId}`, { data: session }).then((response) => {
      return response.data
    })
  }

  deleteSession(sessionToken: string): Promise<AdapterSession> {
    console.log('deleteSession', { sessionToken })
    return this.axios.delete(`/session`, { params: { sessionToken } }).then((response) => {
      return response.data
    })
  }
}
