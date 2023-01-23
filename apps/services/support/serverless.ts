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
    serviceName: 'support',
    customDomain: {
      ...baseServerlessConfig.custom.customDomain,
      basePath: 'support',
    },
  },
  functions: {
    main: {
      handler: './src/lambda.handler',
      events: [
        {
          http: {
            method: 'ANY',
            path: '/',
          },
        },
        {
          http: {
            method: 'ANY',
            path: '{proxy+}',
          },
        },
      ],
      environment: {
        JWT_SECRET: '${env:JWT_SECRET}',
        JWT_EXPIRATION_TIME: '${env:JWT_EXPIRATION_TIME}',
        DATABASE_URL: '${env:DATABASE_URL}',
      },
    },
  },
}

module.exports = serverlessConfig
