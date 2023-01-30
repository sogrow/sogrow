import axios, { AxiosRequestConfig } from 'axios'

export const api = {
  get: <T>(url: string, params?: object, config?: AxiosRequestConfig) => axios.get<T>(url, { params, ...config }),
  post: <T>(url: string, data?: object, config?: AxiosRequestConfig) => axios.post<T>(url, data, config),
  put: <T>(url: string, data?: object, config?: AxiosRequestConfig) => axios.put<T>(url, data, config),
  delete: <T>(url: string, params?: object, config?: AxiosRequestConfig) => axios.delete<T>(url, { params, ...config }),
}
