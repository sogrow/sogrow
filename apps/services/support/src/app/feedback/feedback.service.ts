import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { FeedbackRepository } from '@sogrow/services/infra/gateway/dal'
import { CustomerSatisfactionScore, Feedback } from '@sogrow/services/domain/bom'
import { SlackMessage, SlackWebhookConfig, SlackWebhookGatewayService } from '@sogrow/services/infra/gateway'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class FeedbackService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly feedbackRepository: FeedbackRepository,
    private readonly slackWebHookGateway: SlackWebhookGatewayService,
    private readonly configService: ConfigService,
  ) {
    this.logger.setContext(FeedbackService.name)
  }

  async createFeedback(feedback: Feedback) {
    this.logger.info(`New Feedback received [userId=${feedback.userId}]`)
    await this.sendFeedbackToSlack(feedback)
    return this.feedbackRepository.createFeedback(feedback)
  }

  async updateFeedback(feedbackId: string, feedback: Feedback) {
    this.logger.info(`Feedback updated [userId=${feedback.userId}]`)
    await this.sendFeedbackToSlack(feedback, true)
    return this.feedbackRepository.updateFeedback(feedbackId, feedback)
  }

  private async sendFeedbackToSlack(feedback: Feedback, update = false) {
    const text = update ? `Feedback updated from ${feedback.userId}!` : `New Feedback received from ${feedback.userId}!`
    const headerText = update ? 'Feedback updated!' : 'New Feedback received!'
    const message: SlackMessage = {
      text,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: headerText,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*User ID:* ${feedback.userId}`,
          },
        },
      ],
    }

    if (feedback.csat) {
      message.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*CSAT:* ${this.getCSATEmoji(feedback.csat)}`,
        },
      })
    }

    if (feedback.message) {
      message.blocks.push({
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Comment:* ${feedback.message}`,
        },
      })
    }

    return this.slackWebHookGateway.send({ message, config: this.getWebHookConfig() })
  }

  private getCSATEmoji(csat: CustomerSatisfactionScore): string {
    switch (csat) {
      case CustomerSatisfactionScore.VERY_SATISFIED:
        return ':smile:'
      case CustomerSatisfactionScore.SATISFIED:
        return ':slightly_smiling_face:'
      case CustomerSatisfactionScore.NEUTRAL:
        return ':neutral_face:'
      case CustomerSatisfactionScore.DISSATISFIED:
        return ':confused:'
      case CustomerSatisfactionScore.VERY_DISSATISFIED:
        return ':angry:'
      default:
        return ':question:'
    }
  }

  private getWebHookConfig(): SlackWebhookConfig {
    return {
      workspace: this.configService.get('SLACK_WEBHOOK_WORKSPACE'),
      channel: this.configService.get('SLACK_WEBHOOK_FEEDBACK_ID'),
      token: this.configService.get('SLACK_WEBHOOK_FEEDBACK_TOKEN'),
    }
  }
}
