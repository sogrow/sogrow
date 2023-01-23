import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { FeedbackRepository } from '@sogrow/services/infra/gateway/dal'
import { Feedback } from '@sogrow/services/domain/bom'

@Injectable()
export class FeedbackService {
  constructor(private readonly logger: PinoLogger, private readonly feedbackRepository: FeedbackRepository) {
    this.logger.setContext(FeedbackService.name)
  }

  async createFeedback(feedback: Feedback) {
    this.logger.info(`New Feedback received [userId=${feedback.userId}]`)
    return this.feedbackRepository.createFeedback(feedback)
  }

  async updateFeedback(feedbackId: string, feedback: Feedback) {
    this.logger.info(`Feedback updated [userId=${feedback.userId}]`)
    return this.feedbackRepository.updateFeedback(feedbackId, feedback)
  }
}
