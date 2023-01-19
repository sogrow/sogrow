import { Injectable } from '@nestjs/common'
import { UserRepository } from '@sogrow/services/infra/gateway/dal'
import { PinoLogger } from 'nestjs-pino'
import { AdapterUser } from 'next-auth/adapters'
import { IpRegistryGatewayService } from '@sogrow/services/infra/gateway'
import { User } from '@sogrow/services/domain/bom'

type createUser = Partial<Pick<AdapterUser, 'email' | 'name' | 'image' | 'emailVerified'>>

@Injectable()
export class UserService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly ipRegistryGatewayService: IpRegistryGatewayService,
    private readonly userRepository: UserRepository,
  ) {
    this.logger.setContext(UserService.name)
  }

  async createUser(user: createUser, ip: string): Promise<User> {
    this.logger.info(`Started process to create user`)
    let userGeoLocation
    try {
      this.logger.info(`Try to retrieve geo location of user`)
      userGeoLocation = await this.ipRegistryGatewayService.getIpInfo(ip)
      this.logger.info(`Geo location of user retrieved`)
    } catch (e) {
      this.logger.warn(`Failed to retrieve geo location of user`)
    }

    if (userGeoLocation) {
      return this.userRepository.createUser({ ...user, ...userGeoLocation })
    }

    return this.userRepository.createUser(user)
  }
}
