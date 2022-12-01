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
    },
  },
}

module.exports = serverlessConfig
