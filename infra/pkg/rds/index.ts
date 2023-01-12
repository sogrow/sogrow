import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

export class RDS extends pulumi.ComponentResource {
  rds: aws.rds.Cluster
  rdsInstance: aws.rds.ClusterInstance

  dbSubnet: aws.rds.SubnetGroup
  constructor(
    name: string,
    args: {
      clusterIdentifier: string
      masterPassword: string
      masterUsername: string
      minCapacity: number
      maxCapacity: number
      privateSubnetIds: pulumi.Output<any[]>
      securityGroupId: pulumi.Output<any>
    },
    opts: any = {},
  ) {
    super('pkg:index:RDS', name, {}, opts)

    this.dbSubnet = new aws.rds.SubnetGroup('dbsubnet', {
      subnetIds: args.privateSubnetIds,
      tags: {
        Name: 'sogrow-rds-private-subnet',
      },
    })

    this.rds = new aws.rds.Cluster(
      'postgresql',
      {
        availabilityZones: ['eu-central-1a', 'eu-central-1b', 'eu-central-1c'],
        backupRetentionPeriod: 5,
        clusterIdentifier: args.clusterIdentifier,
        databaseName: 'sogrowdb',
        engine: 'aurora-postgresql',
        engineMode: 'provisioned',
        engineVersion: '14.5',
        serverlessv2ScalingConfiguration: {
          minCapacity: args.minCapacity,
          maxCapacity: args.maxCapacity,
        },
        dbSubnetGroupName: this.dbSubnet.name,
        vpcSecurityGroupIds: [args.securityGroupId],
        masterUsername: args.masterUsername,
        masterPassword: args.masterPassword,
        skipFinalSnapshot: true,
      },
      { parent: this },
    )

    this.rdsInstance = new aws.rds.ClusterInstance(
      'postgresql-instance',
      {
        clusterIdentifier: this.rds.id,
        instanceClass: 'db.serverless',
        engine: 'aurora-postgresql',
        engineVersion: this.rds.engineVersion,
      },
      { parent: this },
    )
  }
}
