import type { Serverless } from 'serverless/aws'
import { baseServerlessConfig } from '../../../serverless/serverless.base'

const serverlessConfig: Partial<Serverless> = {
  ...baseServerlessConfig,
  service: '${self:custom.appName}-${self:custom.serviceName}',
  provider: {
    ...baseServerlessConfig.provider,
    deploymentBucket: {
      name: '${self:custom.appName}-${self:custom.serviceName}-${self:provider.stage}',
    },
  },
  custom: {
    ...baseServerlessConfig.custom,
    serviceName: 'authoriser',
    customDomain: {
      ...baseServerlessConfig.custom.customDomain,
      basePath: 'authoriser',
    },
  },
  functions: {
    'authoriser-api': {
      handler: './src/lambda.handler',
      environment: {
        TOKEN_SECRET: '${env:TOKEN_SECRET}',
      },
    },
  },
}

module.exports = serverlessConfig
