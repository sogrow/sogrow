import { Injectable, NotFoundException } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'
import { CustomerSatisfactionScore, Feedback } from '@sogrow/services/domain/bom'

@Injectable()
export class FeedbackRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(FeedbackRepository.name)
  }

  async createFeedback(data: Prisma.FeedbackCreateInput): Promise<Feedback> {
    const createdFeedback = await this.prisma.feedback.create({
      data,
    })

    return this.toFeedback(createdFeedback)
  }

  async updateFeedback(feedbackId: string, data: Prisma.FeedbackUpdateInput): Promise<Feedback> {
    try {
      const updatedFeedback = await this.prisma.feedback.update({
        where: { id: feedbackId },
        data,
      })
      return this.toFeedback(updatedFeedback)
    } catch (error) {
      this.logger.error(error)
      throw new NotFoundException(`Feedback with id ${feedbackId} not found`)
    }
  }

  toFeedback(entity: Prisma.FeedbackGetPayload<{ include: { user: false } }>): Feedback {
    const feedback = new Feedback()
    feedback.id = entity.id
    feedback.userId = entity.userId || null
    feedback.csat = CustomerSatisfactionScore[entity.csat]
    feedback.message = entity.message || null
    return feedback
  }
}
