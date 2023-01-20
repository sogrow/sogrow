import { BadGatewayException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PinoLogger } from 'nestjs-pino'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AxiosClientFactory } from '@sogrow/services/infra/instrumentation'
import { UserResponseDto } from './dto/user-response.dto'
import { User } from '@sogrow/services/domain/bom'

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

  async getUserFollowersCount(token: string): Promise<number> {
    this.logger.info(`Preparing request to get User Followers Count.`)

    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        'user.fields': 'public_metrics',
      },
    }

    return this.client
      .get(`/users/me`, config)
      .then((response) => {
        this.logger.info(`Received response from Twitter API.`)
        return response.data?.data?.public_metrics?.followers_count
      })
      .catch((error) => {
        this.logger.error(
          `Error retrieving User Followers Count. [err=${error}, status=${error.response?.status}, data=${JSON.stringify(
            error.response?.data,
          )}]`,
        )
        throw new BadGatewayException('GATEWAY_EXCEPTION_TWITTER_EXCEPTION')
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
