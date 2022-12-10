import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import * as awsx from '@pulumi/awsx'

export class RDS extends pulumi.ComponentResource {
  dbSubnet: aws.rds.SubnetGroup
  constructor(
    name: string,
    args: {
      clusterIdentifier: string
      masterPassword: string
      masterUsername: string
      vpc: awsx.ec2.DefaultVpc
      sg: aws.ec2.SecurityGroup
    },
    opts: any = {},
  ) {
    super('pkg:index:RDS', name, {}, opts)

    this.dbSubnet = new aws.rds.SubnetGroup('dbsubnet', {
      subnetIds: args.vpc.publicSubnetIds,
      tags: {
        Name: 'sogrow-rds-public-subnet',
      },
    })

    const postgresql = new aws.rds.Cluster(
      'postgresql',
      {
        availabilityZones: ['eu-central-1a', 'eu-central-1b', 'eu-central-1c'],
        backupRetentionPeriod: 5,
        clusterIdentifier: args.clusterIdentifier,
        databaseName: 'sogrowdb',
        engine: 'aurora-postgresql',
        engineMode: 'serverless',
        dbSubnetGroupName: this.dbSubnet.name,
        vpcSecurityGroupIds: [args.sg.id],
        masterUsername: args.masterUsername,
        masterPassword: args.masterPassword,
        skipFinalSnapshot: true,
        enableHttpEndpoint: true,
      },
      { parent: this },
    )
  }
}
