import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

export class VPC extends pulumi.ComponentResource {
  vpc: awsx.ec2.DefaultVpc
  securityGroup: aws.ec2.SecurityGroup

  constructor(name: string, args: { vpcName: string }, opts: any = {}) {
    super('pkg:index:vpc', name, {}, opts)

    this.vpc = new awsx.ec2.DefaultVpc(
      'main',
      {
        tags: {
          Name: `${args.vpcName}`,
        },
      },
      { parent: this },
    )

    this.securityGroup = new aws.ec2.SecurityGroup(
      'lambda-sg',
      {
        vpcId: this.vpc.vpcId,
        ingress: [
          {
            description: 'allow HTTPS access from anywhere',
            fromPort: 443,
            toPort: 443,
            protocol: 'tcp',
            cidrBlocks: ['0.0.0.0/0'],
          },
        ],
        egress: [
          {
            fromPort: 0,
            toPort: 0,
            protocol: '-1',
            cidrBlocks: ['0.0.0.0/0'],
          },
        ],
        tags: {
          Name: 'sogrow-security-group',
        },
      },
      { parent: this },
    )
  }
}
