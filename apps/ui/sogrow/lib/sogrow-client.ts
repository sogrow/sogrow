import axios, { AxiosInstance } from 'axios'
import { AdapterAccount, AdapterSession, AdapterUser } from 'next-auth/adapters'

export default class SogrowClient {
  private client: AxiosInstance
  constructor(params: { baseURL: string; validateStatus: (status: number) => boolean }) {
    this.client = axios.create({
      baseURL: params.baseURL,
      validateStatus: params.validateStatus,
    })
  }

  createUser(user: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    return this.client.post(`/user/signup`, user).then((response) => {
      return response.data
    })
  }

  getUser(id: string): Promise<AdapterUser> {
    return this.client.get(`/user`, { params: { id } }).then((response) => {
      return response.data
    })
  }

  getUserByEmail(email: string): Promise<AdapterUser> {
    return this.client.get(`/user`, { params: { email } }).then((response) => {
      return response.data
    })
  }

  getUserByAccountId(providerAccountId: string, provider: string): Promise<AdapterUser> {
    return this.client.get(`/account/user`, { params: { providerAccountId, provider } }).then((response) => {
      return response.data
    })
  }

  updateUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
    return this.client.put(`/user/${user.id}`, user).then((response) => {
      return response.data
    })
  }

  deleteUser(userId: string): Promise<AdapterUser> {
    return this.client.delete(`/user/${userId}`).then((response) => {
      return response.data
    })
  }

  linkAccount(account: AdapterAccount) {
    return this.client.post(`/account`, account).then((response) => {
      return response.data
    })
  }

  unlinkAccount(providerAccountId: string, provider: string): Promise<AdapterAccount> {
    return this.client.delete(`/account`, { params: { providerAccountId, provider } })
  }

  createSession(session: { sessionToken: string; userId: string; expires: Date }): Promise<AdapterSession> {
    return this.client.post(`/session`, session)
  }

  getSessionAndUser(sessionToken: string): Promise<{ session: AdapterSession; user: AdapterUser }> {
    return this.client.get(`/session`, { params: { sessionToken } }).then((response) => {
      return response.data
    })
  }

  updateSession(session: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>): Promise<AdapterSession> {
    return this.client.put(`/session/${session.userId}`, session).then((response) => {
      return response.data
    })
  }

  deleteSession(sessionToken: string): Promise<AdapterSession> {
    return this.client.delete(`/session`, { params: { sessionToken } }).then((response) => {
      return response.data
    })
  }

  exchangeToken(providerAccountId: string, provider: string, token: string) {
    return this.client
      .get(`/account/token-exchange`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { providerAccountId, provider },
      })
      .then((response) => {
        return response.data?.access_token
      })
  }
}
