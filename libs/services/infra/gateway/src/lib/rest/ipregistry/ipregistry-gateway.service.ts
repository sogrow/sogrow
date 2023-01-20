import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { ConfigService } from '@nestjs/config'
import { User } from '@sogrow/services/domain/bom'
import { IpInfo, IpregistryClient, IpregistryOptions } from '@ipregistry/client'

@Injectable()
export class IpRegistryGatewayService {
  private client: IpregistryClient

  private readonly fields = 'location.country.code,location.language.code,time_zone.id'

  constructor(private readonly logger: PinoLogger, private readonly configService: ConfigService) {
    this.client = new IpregistryClient(this.configService.get('IP_REGISTRY_API_KEY'))
  }

  getIpInfo(ip: string): Promise<Partial<User>> {
    this.logger.info(`Preparing request to get IP Info. [ip=${ip}]`)

    return this.client
      .lookup(ip, IpregistryOptions.filter(this.fields))
      .then((response) => {
        this.logger.info(`IP Info successfully returned]`)
        return this.toUserGeoLocation(response?.data)
      })
      .catch((error) => {
        this.logger.error(
          `Error retrieving IP Info. [err=${error}, status=${error.response?.status}, data=${JSON.stringify(error.response?.data)}]`,
        )
        throw new Error(`GATEWAY_EXCEPTION_IP_REGISTRY_EXCEPTION`)
      })
  }

  private toUserGeoLocation(data: IpInfo): Partial<User> {
    const user = new User()
    user.country = data.location.country.code
    user.locale = `${data.location.language.code}-${data.location.country.code}`
    user.timeZone = data.time_zone.id
    return user
  }
}
