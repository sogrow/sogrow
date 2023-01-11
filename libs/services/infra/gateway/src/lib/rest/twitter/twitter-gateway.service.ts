import { BadGatewayException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PinoLogger } from 'nestjs-pino'
import { AxiosInstance } from 'axios'
import { AxiosClientFactory } from '@sogrow/services/infra/instrumentation'
import { UserResponseDto } from './dto/user-response.dto'
import { User } from '@sogrow/services/domain/bom'
import { reporter } from 'next/dist/trace/report'

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
      baseURL: this.configService.get('TWITTER_BASE_URL'),
      validateStatus: (status: number) => status >= 200 && status < 300,
    })
  }

  async getUserInfo(token: string): Promise<User> {
    this.logger.info(`Preparing request to get User Info.`)

    return this.client
      .get<UserResponseDto>(`/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.logger.info(`Twitter User Info successfully returned. [status=${response.status}]`)
        return this.toUserInfo(response?.data)
      })
      .catch((error) => {
        this.logger.error(
          `Error retrieving Twitter User Info. [err=${error}, status=${error.response?.status}, data=${JSON.stringify(
            error.response?.data,
          )}]`,
        )
        throw new BadGatewayException(`GATEWAY_EXCEPTION_TWITTER_EXCEPTION`)
      })
  }

  private toUserInfo({ data }: UserResponseDto): User {
    const userInfo = new User()
    userInfo.id = data.id
    userInfo.name = data.name
    userInfo.username = data.username
    return userInfo
  }
}
