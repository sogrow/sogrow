import axios, { AxiosInstance } from 'axios'
export class AxiosClientFactory {
  public build(params: { baseURL: string; validateStatus: (status: number) => boolean }): AxiosInstance {
    return axios.create({
      baseURL: params.baseURL,
      validateStatus: params.validateStatus,
    })
  }
}
