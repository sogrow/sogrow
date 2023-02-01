import { QueryFunctionContext, useMutation, useQuery, useQueryClient, UseQueryOptions } from 'react-query'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { api, RequestConfig } from './api'

// See: https://www.smashingmagazine.com/2022/01/building-real-app-react-query/

type QueryKeyT = [string, object | undefined]

export type UseFetchOptions = {
  url: string | null
  params?: object
  requestConfig?: RequestConfig
  axiosRequestConfig?: AxiosRequestConfig
  useQueryOptions?: UseQueryOptions<any, Error, any, QueryKeyT>
}

export type UseMutationOptions<T, S> = {
  url: string
  params?: object
  requestConfig?: RequestConfig
  axiosRequestConfig?: AxiosRequestConfig
  updater?: ((oldData: T, newData: S) => T) | undefined
}

export const fetcher = async <T>(
  { queryKey, pageParam }: QueryFunctionContext<QueryKeyT>,
  requestConfig?: RequestConfig,
  axiosRequestConfig?: AxiosRequestConfig,
): Promise<T> => {
  const [url, params] = queryKey
  return api.get<T>(url, { ...params, ...pageParam }, requestConfig, axiosRequestConfig).then((res) => res.data)
}

export const useFetch = <T>({ url, params, requestConfig, axiosRequestConfig, useQueryOptions }: UseFetchOptions) => {
  return useQuery<T, Error, T, QueryKeyT>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey, meta: undefined }, requestConfig, axiosRequestConfig),
    {
      enabled: !!url,
      ...useQueryOptions,
    },
  )
}

const useGenericMutation = <T, S>(
  func: (data: S) => Promise<AxiosResponse<S>>,
  url: string,
  params?: object,
  updater?: ((oldData: T, newData: S) => T) | undefined,
) => {
  const queryClient = useQueryClient()

  return useMutation<AxiosResponse, AxiosError, S>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url, params])

      const previousData = queryClient.getQueryData([url, params])

      queryClient.setQueryData<T>([url, params], (oldData) => {
        return updater ? updater(oldData, data as S) : (data as unknown as T)
      })

      return previousData
    },
    onError: (err, _, context) => {
      queryClient.setQueryData([url, params], context)
    },
    onSettled: () => {
      queryClient.invalidateQueries([url, params])
    },
  })
}

export const usePost = <T, S extends object>({ url, params, requestConfig, axiosRequestConfig, updater }: UseMutationOptions<T, S>) => {
  return useGenericMutation<T, S>((data) => api.post<S>(url, data, requestConfig, axiosRequestConfig), url, params, updater)
}

export const useUpdate = <T, S extends object>({ url, params, requestConfig, axiosRequestConfig, updater }: UseMutationOptions<T, S>) => {
  return useGenericMutation<T, S>((data) => api.put<S>(url, data, requestConfig, axiosRequestConfig), url, params, updater)
}
