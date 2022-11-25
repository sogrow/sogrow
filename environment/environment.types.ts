export interface ServerlessEnvironment {
  name: 'dev' | 'preview' | 'prod'
  region: string
  profile: string
}
