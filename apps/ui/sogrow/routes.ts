const baseURL = 'https://api-preview.sogrow.cloud'

export const apiRoutes = {
  userSettings: {
    get: baseURL + '/identity/user-settings',
    update: baseURL + '/identity/user-settings',
  },
  slot: {
    setup: baseURL + '/schedule/slots/setup',
  },
}
