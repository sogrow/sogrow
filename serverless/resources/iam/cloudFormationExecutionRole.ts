export const createCloudFormationExecutionRole = () => {
  const cloudFormationExecutionRole = {
    Type: 'AWS::IAM::Role',
    Properties: {
      RoleName: 'Sogrow-CloudFormationExecutionRole',
      AssumeRolePolicyDocument: {
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
      },
      Policies: [
        {
          PolicyName: 'DeployLambdaFunctions',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: [
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
                Resource: 'arn:aws:lambda:${aws:region}:${aws:accountId}:function:${self:custom.appName}-*',
              },
            ],
          },
        },
        {
          PolicyName: 'DeployLogGroups',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: [
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
                Resource: [
                  'arn:aws:logs:${aws:region}:${aws:accountId}:log-group:/aws/lambda/${self:custom.appName}-*',
                  'arn:aws:logs:${aws:region}:${aws:accountId}:log-group:/aws/http-api/${self:custom.appName}-*',
                ],
              },
              {
                Effect: 'Allow',
                Action: 'logs:Describe*',
                Resource: 'arn:aws:logs:${aws:region}:${aws:accountId}:log-group:*',
              },
              {
                Effect: 'Allow',
                Action: ['logs:CreateLogDelivery', 'logs:DeleteLogDelivery', 'logs:DescribeResourcePolicies', 'logs:DescribeLogGroups'],
                Resource: '*',
              },
            ],
          },
        },
        {
          PolicyName: 'DeployAppBuckets',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Sid: 'AllBucketPermissions',
                Effect: 'Allow',
                Action: ['s3:ListAllMyBuckets', 's3:ListBucket'],
                Resource: '*',
              },
              {
                Sid: 'WriteAppBuckets',
                Effect: 'Allow',
                Action: [
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
                Resource: 'arn:aws:s3:::${self:custom.appName}-*',
              },
            ],
          },
        },
        {
          PolicyName: 'DeployLambdaExecutionRoles',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Sid: 'AllLambdaExecutionPermission',
                Effect: 'Allow',
                Action: [
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
                Resource: 'arn:aws:iam::${aws:accountId}:role/*',
              },
              {
                Sid: 'CreateServiceLinkedRole',
                Effect: 'Allow',
                Action: 'iam:CreateServiceLinkedRole',
                Resource: 'arn:aws:iam::${aws:accountId}:role/aws-service-role/ops.apigateway.amazonaws.com/AWSServiceRoleForAPIGateway',
              },
            ],
          },
        },
        {
          PolicyName: 'DeployAPIGateway',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: ['apigateway:GET', 'apigateway:POST', 'apigateway:PUT', 'apigateway:PATCH', 'apigateway:DELETE'],
                Resource: ['arn:aws:apigateway:${aws:region}::/apis', 'arn:aws:apigateway:${aws:region}::/apis/*'],
              },
            ],
          },
        },
        {
          PolicyName: 'ACMListCertificates',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: 'acm:ListCertificates',
                Resource: '*',
              },
            ],
          },
        },
        {
          PolicyName: 'DeployCloudfrontDistribution',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: ['cloudfront:UpdateDistribution'],
                Resource: '*',
              },
            ],
          },
        },
        {
          PolicyName: 'DeployRoute53',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Sid: 'ReadRoute53',
                Effect: 'Allow',
                Action: ['route53:ListHostedZones', 'route53:GetHostedZone', 'route53:ListResourceRecordSets'],
                Resource: '*',
              },
              {
                Sid: 'UpdateRoute53ResourceRecordSets',
                Effect: 'Allow',
                Action: 'route53:ChangeResourceRecordSets',
                Resource: 'arn:aws:route53:::hostedzone/Z06239922GXVE5F6HRCPR',
              },
            ],
          },
        },
      ],
    },
  }

  return {
    resources: {
      cloudFormationExecutionRole,
    },
  }
}
