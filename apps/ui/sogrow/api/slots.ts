import { usePost } from '../utils/reactQuery'
import { apiRoutes } from '../routes'

export const useSetupSlots = () =>
  usePost({
    url: apiRoutes.slot.setup,
    requestConfig: { appendToken: true },
  })
