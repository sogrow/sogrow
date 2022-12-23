import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

export class EC2 extends pulumi.ComponentResource {
  size = 't2.micro'
  ec2: aws.ec2.Instance
  constructor(
    name: string,
    args: {
      securityGroupId: pulumi.Output<string>
      publicSubnetIds: pulumi.Output<string[]>
      publicKey: string
    },
    opts: any = {},
  ) {
    super('pkg:index:ec2', name, {}, opts)

    const keyPair = new aws.ec2.KeyPair('jump-box', { publicKey: args.publicKey }, { parent: this })

    const ami = aws.ec2.getAmiOutput(
      {
        filters: [
          {
            name: 'name',
            values: ['amzn-ami-hvm-*'],
          },
        ],
        owners: ['137112412989'], // This owner ID is Amazon
        mostRecent: true,
      },
      { parent: this },
    )

    this.ec2 = new aws.ec2.Instance(
      'jump-box',
      {
        instanceType: this.size,
        vpcSecurityGroupIds: [args.securityGroupId],
        subnetId: args.publicSubnetIds.apply((x) => x![0]),
        ami: ami.id,
        keyName: keyPair.keyName,
      },
      { parent: this },
    )
  }
}
