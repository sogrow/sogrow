import { QueryFunctionContext, useQuery, UseQueryOptions } from 'react-query'
import axios from 'axios'
import { getSession } from 'next-auth/react'

type QueryKeyT = [string, object | undefined]

export const fetcher = async <T>({ queryKey, pageParam }: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const session = await getSession()
  if (session) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${session.accessToken}`
  }
  const [url, params] = queryKey
  return axios.get<T>(url, { params: { ...params, pageParam } }).then((res) => res.data)
}

export const useFetch = <T>(url: string | null, params?: object, config?: UseQueryOptions<T, Error, T, QueryKeyT>) => {
  return useQuery<T, Error, T, QueryKeyT>([url, params], ({ queryKey }) => fetcher({ queryKey, meta: undefined }), {
    enabled: !!url,
    ...config,
  })
}
