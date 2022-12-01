import * as pulumi from '@pulumi/pulumi'
import * as aws from '@pulumi/aws'
import { getDomainAndSubdomain } from '../utils/utils'

export class ACM extends pulumi.ComponentResource {
  certificate: aws.acm.Certificate
  certificateValidation: aws.acm.CertificateValidation

  constructor(name: string, args: { domainName: string }, opts: any = {}) {
    super('pkg:index:Certificate', name, {}, opts)
    const { domainName } = args

    // Per AWS, ACM Certificates must be in the us-east-1 region
    const eastRegion = new aws.Provider(
      'east',
      {
        profile: aws.config.profile,
        region: 'us-east-1',
      },
      { parent: this },
    )

    this.certificate = new aws.acm.Certificate(
      'certificate',
      {
        domainName,
        validationMethod: 'DNS',
      },
      { provider: eastRegion, parent: this },
    )

    const domainParts = getDomainAndSubdomain(domainName)
    const hostedZoneId = aws.route53.getZone({ name: domainParts.tld }, { async: true }).then((zone) => zone.zoneId)

    const certificateValidationDomain = new aws.route53.Record(
      `${domainName}-validation-record`,
      {
        name: this.certificate.domainValidationOptions[0].resourceRecordName,
        zoneId: hostedZoneId,
        type: this.certificate.domainValidationOptions[0].resourceRecordType,
        records: [this.certificate.domainValidationOptions[0].resourceRecordValue],
        ttl: 60,
      },
      { parent: this },
    )

    this.certificateValidation = new aws.acm.CertificateValidation(
      'certificateValidation',
      {
        certificateArn: this.certificate.arn,
        validationRecordFqdns: [certificateValidationDomain.fqdn],
      },

      { provider: eastRegion, parent: this },
    )
  }
}
