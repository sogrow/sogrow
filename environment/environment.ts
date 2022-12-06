import type { ServerlessEnvironment } from './environment.types'

export const env: ServerlessEnvironment = {
  name: 'dev',
  region: 'eu-central-1',
  profile: 'local',
  domainName: '',
  vpcName: '',
}
