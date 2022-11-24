import type { Serverless } from 'serverless/aws'
import { env, envName } from './environment/environment.serverless'
const path = require('path')

console.log(`-------------- USING ENV: ${env.name} ----------------`)

export const baseServerlessConfigProvider: Serverless['provider'] = {
  name: 'aws',
  runtime: 'nodejs16.x',
  profile: env.profile,
  stage: env.name,
  environment: {
    NODE_ENV: envName,
    AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
  },
  region: env.region,
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
