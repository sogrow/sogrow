import * as pulumi from '@pulumi/pulumi'
import { ACM } from '../pkg/acm'
import { RDS } from '../pkg/rds'
import { EC2 } from '../pkg/ec2'

const stackConfig = new pulumi.Config('environments')
const config = {
  domainName: stackConfig.require('acm.domainName'),
  clusterIdentifier: stackConfig.require('rds.clusterIdentifier'),
  masterUsername: stackConfig.require('rds.masterUsername'),
  masterPassword: stackConfig.require('rds.masterPassword'),
  publicKey: stackConfig.require('ec2.keyPair.publicKey'),
  rds: {
    minCapacity: stackConfig.require('rds.minCapacity'),
    maxCapacity: stackConfig.require('rds.maxCapacity'),
  },
}

const global = new pulumi.StackReference('sogrow/base/global')
const publicSubnetIds: pulumi.Output<string[]> = global
  .requireOutput('publicSubnetIds')
  .apply((publicSubnetIds) => publicSubnetIds as string[])
const privateSubnetIds: pulumi.Output<string[]> = global
  .requireOutput('privateSubnetIds')
  .apply((privateSubnetIds) => privateSubnetIds as string[])
const securityGroupId: pulumi.Output<string> = global.requireOutput('securityGroupId').apply((securityGroupId) => securityGroupId as string)
const { certificate } = new ACM('certificate', {
  domainName: config.domainName,
})

const { rds } = new RDS('postgresql', {
  clusterIdentifier: config.clusterIdentifier,
  masterUsername: config.masterUsername,
  masterPassword: config.masterPassword,
  minCapacity: Number(config.rds.minCapacity),
  maxCapacity: Number(config.rds.maxCapacity),
  securityGroupId,
  privateSubnetIds,
})

const { ec2 } = new EC2('jump-box', {
  securityGroupId,
  publicSubnetIds,
  publicKey: config.publicKey,
})

export const acmId = certificate.id
export const rdsId = rds.id
export const ec2InstanceId = ec2.id
