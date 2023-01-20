import type { Serverless } from 'serverless/aws'
import { env, envName } from '../environment/environment.serverless'

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
  timeout: 30,
}

export const baseServerlessConfig: Partial<Serverless> = {
  frameworkVersion: '3',
  app: 'sogrow',
  service: 'base',
  useDotenv: true,
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: [
    'serverless-webpack',
    'serverless-webpack-prisma',
    'serverless-offline',
    'serverless-domain-manager',
    'serverless-vpc-discovery',
    'serverless-api-gateway-throttling',
  ],
  custom: {
    appName: 'sogrow',
    customDomain: {
      domainName: env.domainName,
      basePath: '',
      createRoute53Record: true,
      stage: env.stage,
    },
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
    vpcDiscovery: {
      vpcName: env.vpcName,
      subnets: [
        {
          tagKey: 'Name',
          tagValues: ['main-private-subnet-1', 'main-private-subnet-2', 'main-private-subnet-3'],
        },
      ],
      securityGroups: [
        {
          tagKey: 'Name',
          tagValues: ['security-group'],
        },
      ],
    },
    apiGatewayThrottling: {
      maxRequestsPerSecond: env.apiGatewayThrottling.maxRequestsPerSecond,
      maxConcurrentRequests: env.apiGatewayThrottling.maxConcurrentRequests,
    },
  },
  provider: {
    ...baseServerlessConfigProvider,
  },
}
