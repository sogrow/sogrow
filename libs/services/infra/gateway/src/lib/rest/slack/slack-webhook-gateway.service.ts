import { Injectable } from '@nestjs/common'
import { AxiosInstance } from 'axios'
import { PinoLogger } from 'nestjs-pino'
import { ConfigService } from '@nestjs/config'
import { AxiosClientFactory } from '@sogrow/services/infra/instrumentation'
import { SlackMessage } from './SlackMessage'
import { SlackWebhookConfig } from './SlackWebhookConfig'

@Injectable()
export class SlackWebhookGatewayService {
  private client: AxiosInstance

  constructor(
    private readonly logger: PinoLogger,
    private readonly configService: ConfigService,
    private axiosClientFactory: AxiosClientFactory,
  ) {
    this.logger.setContext(SlackWebhookGatewayService.name)
    this.client = this.axiosClientFactory.build({
      baseURL: this.configService.get('SLACK_WEBHOOK_URL'),
      validateStatus: (status: number) => status >= 200 && status < 300,
    })
  }

  async send({ message, config }: { message: SlackMessage; config: SlackWebhookConfig }): Promise<void> {
    this.logger.info(`Preparing request to send Webhook Message.`)
    const uri = `/${config.workspace}/${config.channel}/${config.token}`
    return this.client
      .post(uri, message)
      .then((response) => {
        this.logger.info(`Received response from Slack API.`)
        return response.data
      })
      .catch((error) => {
        this.logger.error(
          `Error sending Webhook Message. [err=${error}, status=${error.response?.status}, data=${JSON.stringify(error.response?.data)}]`,
        )
        throw new Error('GATEWAY_EXCEPTION_SLACK_EXCEPTION')
      })
  }
}
