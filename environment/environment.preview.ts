import type { ServerlessEnvironment } from './environment.types'

export const env: ServerlessEnvironment = {
  name: 'preview',
  profile: '',
  region: 'eu-central-1',
  domainName: 'api-preview.sogrow.cloud',
  vpcName: 'main',
  apiGatewayThrottling: {
    maxRequestsPerSecond: 100,
    maxConcurrentRequests: 50,
  },
}
