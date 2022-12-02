import type { Serverless } from 'serverless/aws'
import { baseServerlessConfig } from '../../../serverless.base'

const serverlessConfig: Partial<Serverless> = {
  ...baseServerlessConfig,
  service: 'identity',
  provider: {
    ...baseServerlessConfig.provider,
  },
  custom: {
    ...baseServerlessConfig.custom,
    customDomain: {
      ...baseServerlessConfig.custom.customDomain,
      basePath: 'identity',
    },
  },
  functions: {
    analytics: {
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
      },
    },
  },
}

module.exports = serverlessConfig
