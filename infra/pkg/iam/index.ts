import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'

export class CloudformationExecutionRole extends pulumi.ComponentResource {
  cloudformationExecutionRole: aws.iam.Role

  constructor(name: string, args = {}, opts: any = {}) {
    super('pkg:index:CloudformationExecutionRole', name, {}, opts)

    const accountId = aws.getCallerIdentity({ async: true }).then((awsIdentity) => awsIdentity.accountId)
    const region = aws.getRegion().then((region) => region.name)

    const inlineDeployLambdaFunctionPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          effect: 'Allow',
          actions: [
            'lambda:Get*',
            'lambda:List*',
            'lambda:CreateFunction',
            'lambda:DeleteFunction',
            'lambda:CreateFunction',
            'lambda:DeleteFunction',
            'lambda:UpdateFunctionConfiguration',
            'lambda:UpdateFunctionCode',
            'lambda:PublishVersion',
            'lambda:CreateAlias',
            'lambda:DeleteAlias',
            'lambda:UpdateAlias',
            'lambda:AddPermission',
            'lambda:RemovePermission',
            'lambda:InvokeFunction',
          ],
          resources: [`arn:aws:lambda:${region}:${accountId}:function:sogrow-*`],
        },
      ],
    })

    const inlineDeployLogGroupsPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          effect: 'Allow',
          actions: [
            'logs:CreateLogGroup',
            'logs:Get*',
            'logs:Describe*',
            'logs:List*',
            'logs:DeleteLogGroup',
            'logs:PutResourcePolicy',
            'logs:DeleteResourcePolicy',
            'logs:PutRetentionPolicy',
            'logs:DeleteRetentionPolicy',
            'logs:TagLogGroup',
            'logs:UntagLogGroup',
          ],
          resources: [
            `arn:aws:logs:${region}:${accountId}:log-group:/aws/lambda/sogrow-*`,
            `arn:aws:logs:${region}:${accountId}:log-group:/aws/http-api/sogrow-*`,
          ],
        },
        {
          effect: 'Allow',
          actions: ['logs:Describe*'],
          resources: ['arn:aws:logs:${aws:region}:${aws:accountId}:log-group:*'],
        },
        {
          effect: 'Allow',
          actions: ['logs:CreateLogDelivery', 'logs:DeleteLogDelivery', 'logs:DescribeResourcePolicies', 'logs:DescribeLogGroups'],
          resources: ['*'],
        },
      ],
    })

    const inlineDeployAppBucketsPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          sid: 'AllBucketPermissions',
          effect: 'Allow',
          actions: ['s3:ListAllMyBuckets', 's3:ListBucket'],
          resources: ['*'],
        },
        {
          sid: 'WriteAppBuckets',
          effect: 'Allow',
          actions: [
            's3:Get*',
            's3:List*',
            's3:CreateBucket',
            's3:DeleteBucket',
            's3:PutObject',
            's3:DeleteObject',
            's3:PutBucketPolicy',
            's3:DeleteBucketPolicy',
            's3:PutEncryptionConfiguration',
          ],
          resources: ['arn:aws:s3:::sogrow-*'],
        },
      ],
    })

    const inlineDeployLambdaExecutionRolesPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          sid: 'AllLambdaExecutionPermission',
          effect: 'Allow',
          actions: [
            'iam:Get*',
            'iam:List*',
            'iam:PassRole',
            'iam:CreateRole',
            'iam:DeleteRole',
            'iam:AttachRolePolicy',
            'iam:DeleteRolePolicy',
            'iam:PutRolePolicy',
            'iam:TagRole',
            'iam:UntagRole',
          ],
          resources: [`arn:aws:iam::${accountId}:role/*`],
        },
        {
          sid: 'CreateServiceLinkedRole',
          effect: 'Allow',
          actions: ['iam:CreateServiceLinkedRole'],
          resources: [`arn:aws:iam::${accountId}:role/aws-service-role/ops.apigateway.amazonaws.com/AWSServiceRoleForAPIGateway`],
        },
      ],
    })

    const inlineDeployAPIGatewayPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          effect: 'Allow',
          actions: ['apigateway:GET', 'apigateway:POST', 'apigateway:PUT', 'apigateway:PATCH', 'apigateway:DELETE'],
          resources: [`arn:aws:apigateway:${region}::/apis`, `arn:aws:apigateway:${region}::/apis/*`],
        },
      ],
    })

    const inlineACMListCertificatesPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          effect: 'Allow',
          actions: ['acm:ListCertificates'],
          resources: ['*'],
        },
      ],
    })

    const inlineDeployCloudfrontDistributionPolicy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          effect: 'Allow',
          actions: ['cloudfront:UpdateDistribution'],
          resources: ['*'],
        },
      ],
    })

    const inlineDeployRoute53Policy = aws.iam.getPolicyDocument({
      version: '2012-10-17',
      statements: [
        {
          sid: 'ReadRoute53',
          effect: 'Allow',
          actions: ['route53:ListHostedZones', 'route53:GetHostedZone', 'route53:ListResourceRecordSets'],
          resources: ['*'],
        },
        {
          sid: 'UpdateRoute53ResourceRecordSets',
          effect: 'Allow',
          actions: ['route53:ChangeResourceRecordSets'],
          resources: ['arn:aws:route53:::hostedzone/Z06239922GXVE5F6HRCPR'],
        },
      ],
    })

    this.cloudformationExecutionRole = new aws.iam.Role(
      `Sogrow-CloudformationExecutionRole`,
      {
        assumeRolePolicy: JSON.stringify({
          Version: '2012-10-17',
          Statement: [
            {
              Effect: 'Allow',
              Action: 'sts:AssumeRole',
              Principal: {
                Service: 'cloudformation.amazonaws.com',
              },
            },
          ],
        }),
        inlinePolicies: [
          {
            name: 'DeployLambdaFunctions',
            policy: inlineDeployLambdaFunctionPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'DeployLogGroups',
            policy: inlineDeployLogGroupsPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'DeployAppBuckets',
            policy: inlineDeployAppBucketsPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'DeployLambdaExecutionRoles',
            policy: inlineDeployLambdaExecutionRolesPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'DeployAPIGateway',
            policy: inlineDeployAPIGatewayPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'ACMListCertificates',
            policy: inlineACMListCertificatesPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'DeployCloudfrontDistribution',
            policy: inlineDeployCloudfrontDistributionPolicy.then((inlinePolicy) => inlinePolicy.json),
          },
          {
            name: 'DeployRoute53',
            policy: inlineDeployRoute53Policy.then((inlinePolicy) => inlinePolicy.json),
          },
        ],
      },
      { parent: this },
    )
  }
}
