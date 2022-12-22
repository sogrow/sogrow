import { VPC } from './vpc'

/**
 * This is the main VPC for Sogrow.
 * It will be shared for preview & production.
 */
const { vpc, securityGroup } = new VPC('main-vpc')

export const vpcId = vpc.vpcId
export const privateSubnetIds = vpc.privateSubnetIds
export const publicSubnetIds = vpc.privateSubnetIds
export const securityGroupId = securityGroup.id
