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
    serviceName: 'schedule',
    customDomain: {
      ...baseServerlessConfig.custom.customDomain,
      basePath: 'schedule',
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
            cors: true,
          },
        },
        {
          http: {
            method: 'ANY',
            path: '{proxy+}',
            cors: true,
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
