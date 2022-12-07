import type { Serverless } from 'serverless/aws'
import { baseServerlessConfig } from '../../../serverless.base'

const serverlessConfig: Partial<Serverless> = {
  ...baseServerlessConfig,
  service: 'analytics',
  provider: {
    ...baseServerlessConfig.provider,
  },
  custom: {
    ...baseServerlessConfig.custom,
    customDomain: {
      ...baseServerlessConfig.custom.customDomain,
      basePath: 'analytics',
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
        TOKEN_SECRET: '${env:TOKEN_SECRET}',
        DATABASE_URL: '${env:DATABASE_URL}',
      },
    },
  },
}

module.exports = serverlessConfig
