import axios, { AxiosRequestConfig } from 'axios'
import { getSession } from 'next-auth/react'

export type RequestConfig = {
  appendToken?: boolean
}

const appendToken = async (config?: AxiosRequestConfig) => {
  const session = await getSession()
  return {
    ...config,
    headers: {
      ...config?.headers,
      Authorization: `Bearer ${session?.accessToken}`,
    },
  }
}

export const api = {
  get: async <T>(url: string, params?: object, requestConfig?: RequestConfig, axiosRequestConfig?: AxiosRequestConfig) => {
    if (requestConfig?.appendToken) {
      axiosRequestConfig = await appendToken(axiosRequestConfig)
    }
    return axios.get<T>(url, { params, ...axiosRequestConfig })
  },
  post: async <T>(url: string, data?: object, requestConfig?: RequestConfig, axiosRequestConfig?: AxiosRequestConfig) => {
    if (requestConfig?.appendToken) {
      axiosRequestConfig = await appendToken(axiosRequestConfig)
    }
    return axios.post<T>(url, data, axiosRequestConfig)
  },
  put: async <T>(url: string, data?: object, requestConfig?: RequestConfig, axiosRequestConfig?: AxiosRequestConfig) => {
    if (requestConfig?.appendToken) {
      axiosRequestConfig = await appendToken(axiosRequestConfig)
    }
    return axios.put<T>(url, data, axiosRequestConfig)
  },
  delete: async <T>(url: string, params?: object, requestConfig?: RequestConfig, axiosRequestConfig?: AxiosRequestConfig) => {
    if (requestConfig?.appendToken) {
      axiosRequestConfig = await appendToken(axiosRequestConfig)
    }
    return axios.delete<T>(url, { params, ...axiosRequestConfig })
  },
}
