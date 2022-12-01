import * as aws from '@pulumi/aws'

export function getDomainAndSubdomain(domain: string): { subdomain: string; tld: string } {
  const parts = domain.split('.')
  if (parts.length < 2) {
    throw new Error(`No TLD found on ${domain}`)
  }

  if (parts.length === 2) {
    return { subdomain: '', tld: domain }
  }

  const subdomain = parts[0]
  parts.shift()
  return {
    subdomain,
    tld: parts.join('.') + '.',
  }
}
