import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

export class VPC extends pulumi.ComponentResource {
  vpc: awsx.ec2.Vpc
  securityGroup: aws.ec2.SecurityGroup

  constructor(name: string, args = {}, opts: any = {}) {
    super('pkg:index:vpc', name, {}, opts)

    this.vpc = new awsx.ec2.Vpc(
      'main',
      {
        tags: {
          Name: `main-vpc`,
        },
        numberOfAvailabilityZones: 2,
        natGateways: {
          // Only one NAT Gateway should be sufficient for now to save cost
          strategy: awsx.ec2.NatGatewayStrategy.Single,
        },
        subnetSpecs: [
          {
            name: 'public-subnet',
            type: awsx.ec2.SubnetType.Public,
            cidrMask: 24,
            tags: {
              Name: 'main-public-subnet',
            },
          },
          {
            name: 'private-subnet',
            type: awsx.ec2.SubnetType.Private,
            cidrMask: 24,
            tags: {
              Name: 'main-private-subnet',
            },
          },
        ],
      },
      { parent: this },
    )

    this.securityGroup = new aws.ec2.SecurityGroup(
      'security-group',
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
          {
            description: 'allow Aurora Serverless access',
            fromPort: 5432,
            toPort: 5432,
            protocol: 'tcp',
            cidrBlocks: ['0.0.0.0/0'],
          },
          {
            description: 'allow ssh access',
            fromPort: 22,
            toPort: 22,
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
          Name: 'security-group',
        },
      },
      { parent: this },
    )
  }
}
