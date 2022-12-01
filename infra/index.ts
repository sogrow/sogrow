import * as pulumi from '@pulumi/pulumi'
import { ACM } from './acm'

const stackConfig = new pulumi.Config('sogrow')
const config = {
  domainName: stackConfig.require('acm.domainName'),
}

export const certificate = new ACM('certificate', {
  domainName: config.domainName,
})
