import * as pulumi from '@pulumi/pulumi'
import { ACM } from './acm'
import { RDS } from './rds'
import { VPC } from './vpc'

const stackConfig = new pulumi.Config('sogrow')
const config = {
  vpcName: stackConfig.require('vpc.name'),
  domainName: stackConfig.require('acm.domainName'),
  clusterIdentifier: stackConfig.require('rds.clusterIdentifier'),
  masterUsername: stackConfig.require('rds.masterUsername'),
  masterPassword: stackConfig.require('rds.masterPassword'),
}

export const certificate = new ACM('certificate', {
  domainName: config.domainName,
})

const { vpc } = new VPC('main', { vpcName: config.vpcName })

export const rds = new RDS('postgresql', {
  clusterIdentifier: config.clusterIdentifier,
  masterUsername: config.masterUsername,
  masterPassword: config.masterPassword,
  vpc,
})
export const vpcId = vpc.vpcId
export const vpcPrivateSubnetIds = vpc.privateSubnetIds
export const vpcPublicSubnetIds = vpc.publicSubnetIds
