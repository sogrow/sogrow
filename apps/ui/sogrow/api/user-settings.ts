import { useFetch, usePost } from '../utils/reactQuery'
import { UserSettings } from '@sogrow/services/domain/bom'
import { apiRoutes } from '../routes'

export const useGetUserSettings = () =>
  useFetch<UserSettings>({
    url: apiRoutes.getUserSettings,
    requestConfig: { appendToken: true },
    useQueryOptions: {
      refetchOnWindowFocus: false,
    },
  })

export const useUpdateUserSettings = () =>
  usePost<UserSettings, UserSettings>({
    url: apiRoutes.updateUserSettings,
    requestConfig: { appendToken: true },
  })
