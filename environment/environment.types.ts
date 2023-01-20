export interface ServerlessEnvironment {
  name: 'dev' | 'preview' | 'prod'
  region: string
  profile: string
  domainName: string
  vpcName: string
  apiGatewayThrottling: {
    maxRequestsPerSecond: number
    maxConcurrentRequests: number
  }
}
