import { useFetch, usePost } from '../utils/reactQuery'
import { UserSettings } from '@sogrow/services/domain/bom'
import { apiRoutes } from '../routes'

export const useGetUserSettings = () =>
  useFetch<UserSettings>({
    url: apiRoutes.userSettings.get,
    requestConfig: { appendToken: true },
    useQueryOptions: {
      refetchOnWindowFocus: false,
    },
  })

export const useUpdateUserSettings = () =>
  usePost<UserSettings, UserSettings>({
    url: apiRoutes.userSettings.update,
    requestConfig: { appendToken: true },
  })
