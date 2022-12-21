import axios, { AxiosInstance } from 'axios'
import { Injectable } from '@nestjs/common'
@Injectable()
export class AxiosClientFactory {
  public build(params: { baseURL: string; validateStatus: (status: number) => boolean }): AxiosInstance {
    return axios.create({
      baseURL: params.baseURL,
      validateStatus: params.validateStatus,
    })
  }
}
