import axios, { AxiosInstance } from 'axios'
import { AdapterUser } from 'next-auth/adapters'

// baseURLPreview: https://api-preview.sogrow.cloud/identity/user/signup
export default class SogrowClient {
  private axios: AxiosInstance
  constructor(params: { baseURL: string; validateStatus: (status: number) => boolean }) {
    axios.create({
      baseURL: params.baseURL,
      validateStatus: params.validateStatus,
    })
  }

  createUser(user: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    return this.axios.post(`/signup`, { data: user }).then((response) => {
      return response.data
    })
  }

  getUser(id: string): Promise<AdapterUser> {
    return this.axios.get(`/${id}`).then((response) => {
      return response.data
    })
  }
}
