import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

export class EC2 extends pulumi.ComponentResource {
  size = 't2.micro'
  constructor(
    name: string,
    args: {
      vpc: awsx.ec2.DefaultVpc
      sg: aws.ec2.SecurityGroup
      publicKey: string
    },
    opts: any = {},
  ) {
    super('pkg:index:ec2', name, {}, opts)

    const keyPair = new aws.ec2.KeyPair('jump-box', { publicKey: args.publicKey })

    const ami = aws.ec2.getAmiOutput({
      filters: [
        {
          name: 'name',
          values: ['amzn-ami-hvm-*'],
        },
      ],
      owners: ['137112412989'], // This owner ID is Amazon
      mostRecent: true,
    })

    const jumpBox = new aws.ec2.Instance(
      'jump-box',
      {
        instanceType: this.size,
        vpcSecurityGroupIds: [args.sg.id],
        subnetId: args.vpc.publicSubnetIds.apply((x) => x![0]),
        ami: ami.id,
        keyName: keyPair.keyName,
      },
      { parent: this },
    )
  }
}
