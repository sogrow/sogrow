export const createDeployerRole = () => {
  const deployerRole = {
    Type: 'AWS::IAM::Role',
    Properties: {
      RoleName: 'DeployerRole',
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Action: 'sts:AssumeRole',
            Principal: {
              Service: 'lambda.amazonaws.com',
            },
          },
        ],
      },
      Policies: [
        {
          PolicyName: 'DelegateToCloudFormationPolicy',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: 'iam:PassRole',
                Resource: '!GetAtt CloudFormationExecutionRole.Arn',
              },
            ],
          },
        },
        {
          PolicyName: 'ServerlessFrameworkCliPolicy',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Sid: 'ValidateCloudFormation',
                Effect: 'Allow',
                Action: 'cloudformation:ValidateTemplate',
                Resource: '*',
              },
              {
                Sid: 'ExecuteCloudFormation',
                Effect: 'Allow',
                Action: [
                  'cloudformation:CreateChangeSet',
                  'cloudformation:CreateStack',
                  'cloudformation:DeleteChangeSet',
                  'cloudformation:DeleteStack',
                  'cloudformation:DescribeChangeSet',
                  'cloudformation:DescribeStackEvents',
                  'cloudformation:DescribeStackResource',
                  'cloudformation:DescribeStackResources',
                  'cloudformation:DescribeStacks',
                  'cloudformation:ExecuteChangeSet',
                  'cloudformation:ListStackResources',
                  'cloudformation:SetStackPolicy',
                  'cloudformation:UpdateStack',
                  'cloudformation:UpdateTerminationProtection',
                  'cloudformation:GetTemplate',
                ],
                Resource: "!Sub 'arn:aws:cloudformation:${AWS::Region}:${AWS::AccountId}:stack/${AppId}-*/*'",
              },
              {
                Sid: 'ReadLambda',
                Effect: 'Allow',
                Action: ['lambda:Get*', 'lambda:List*'],
                Resource: '*',
              },
              {
                Sid: 'ManageSlsDeploymentBucket',
                Effect: 'Allow',
                Action: [
                  's3:CreateBucket',
                  's3:DeleteBucket',
                  's3:ListBucket',
                  's3:PutObject',
                  's3:GetObject',
                  's3:DeleteObject',
                  's3:GetBucketPolicy',
                  's3:PutBucketPolicy',
                  's3:DeleteBucketPolicy',
                  's3:PutBucketAcl',
                  's3:GetEncryptionConfiguration',
                  's3:PutEncryptionConfiguration',
                ],
                Resource: "!Sub 'arn:aws:s3:::${AppId}-*'",
              },
              {
                Sid: 'ListS3',
                Effect: 'Allow',
                Action: 's3:List*',
                Resource: '*',
              },
            ],
          },
        },
      ],
    },
  }

  return {
    resources: {
      deployerRole,
    },
  }
}
