import type { ServerlessEnvironment } from './environment.types'

export const env: ServerlessEnvironment = {
  name: 'prod',
  profile: '',
  region: 'eu-central-1',
  domainName: 'api.sogrow.cloud',
  vpcName: 'main',
  apiGatewayThrottling: {
    maxRequestsPerSecond: 200,
    maxConcurrentRequests: 100,
  },
}
