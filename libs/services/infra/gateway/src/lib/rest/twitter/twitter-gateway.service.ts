import { BadGatewayException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PinoLogger } from 'nestjs-pino'
import { AxiosInstance } from 'axios'
import { AxiosClientFactory } from '@sogrow/services/infra/instrumentation'
import { UserResponseDto } from './dto/user-response.dto'
import { UserInfo } from '@sogrow/services/domain/bom'

@Injectable()
export class TwitterGatewayService {
  private client: AxiosInstance
  constructor(
    private readonly logger: PinoLogger,
    private readonly configService: ConfigService,
    private axiosClientFactory: AxiosClientFactory,
  ) {
    this.logger.setContext(TwitterGatewayService.name)
    this.client = axiosClientFactory.build({
      baseURL: this.configService.get('backend.twitter.base-url'),
      validateStatus: (status: number) => status >= 200 && status < 300,
    })
  }

  getUserInfo(bearer: string): Promise<UserInfo | void> {
    return this.client
      .get<UserResponseDto>(`/users/me`, {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      })
      .then((response) => {
        this.logger.info(`Twitter User Info successfully returned. [status=${response.status}]`)
        return this.toAccount(response?.data)
      })
      .catch((error) => {
        this.logger.error(
          `Error retrieving Twitter User Info. [err=${error}, status=${error.response?.status}, data=${JSON.stringify(
            error.response?.data,
          )}]`,
        )
        throw new BadGatewayException(`GATEWAY_TWITTER_EXCEPTION`)
      })
  }

  toAccount(dto: UserResponseDto): UserInfo {
    const userInfo = new UserInfo()
    userInfo.id = Number(dto.id)
    userInfo.name = dto.name
    userInfo.username = dto.username
    return userInfo
  }
}
