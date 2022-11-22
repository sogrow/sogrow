import type { Serverless } from 'serverless/aws'
const path = require('path')

export const baseServerlessConfigProvider: Serverless['provider'] = {
  name: 'aws',
  runtime: 'nodejs16.x',
  profile: '',
  stage: 'dev',
  environment: {
    NODE_ENV: process.env.NODE_ENV,
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
  },
  region: 'eu-central-1',
}

export const baseServerlessConfig: Partial<Serverless> = {
  frameworkVersion: '3',
  service: 'base',
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  custom: {
    webpack: {
      webpackConfig: path.relative(process.cwd(), 'webpack.config.js'),
      includeModules: {
        packagePath: path.join('../../../', 'package.json'),
        nodeModulesRelativeDir: '../../../',
      },
      packageOptions: {
        lockFile: path.join('../../../', 'package-lock.json'),
      },
    },
  },
  provider: {
    ...baseServerlessConfigProvider,
  },
}
