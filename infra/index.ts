import * as pulumi from '@pulumi/pulumi'
import { ACM } from './acm'
import { RDS } from './rds'
import { VPC } from './vpc'
import { EC2 } from './ec2'

const stackConfig = new pulumi.Config('sogrow')
const config = {
  vpcName: stackConfig.require('vpc.name'),
  domainName: stackConfig.require('acm.domainName'),
  clusterIdentifier: stackConfig.require('rds.clusterIdentifier'),
  masterUsername: stackConfig.require('rds.masterUsername'),
  masterPassword: stackConfig.require('rds.masterPassword'),
  publicKey: stackConfig.require('ec2.keyPair.publicKey'),
}

export const certificate = new ACM('certificate', {
  domainName: config.domainName,
})

const { vpc, securityGroup } = new VPC('main', { vpcName: config.vpcName })

export const rds = new RDS('postgresql', {
  clusterIdentifier: config.clusterIdentifier,
  masterUsername: config.masterUsername,
  masterPassword: config.masterPassword,
  sg: securityGroup,
  vpc,
})

export const jumpBox = new EC2('jump-box', {
  vpc,
  sg: securityGroup,
  publicKey: config.publicKey,
})

export const vpcId = vpc.vpcId
export const vpcPrivateSubnetIds = vpc.privateSubnetIds
export const vpcPublicSubnetIds = vpc.publicSubnetIds
