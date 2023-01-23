import { BadRequestException, Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { RequestContext } from '@sogrow/services/web/context'
import { CustomerSatisfactionScore, Feedback } from '@sogrow/services/domain/bom'
import { FeedbackService } from './feedback.service'
import { CreateFeedbackRequestDto } from './dto/request/CreateFeedbackRequest.dto'
import { CreateRequestResponseDto } from './dto/response/CreateRequestResponse.dto'
import { UpdateFeedbackRequestDto } from './dto/request/UpdateFeedbackRequest.dto'
import { JwtAuthGuard } from '@sogrow/services/web/auth'

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly logger: PinoLogger, private readonly feedbackService: FeedbackService) {
    this.logger.setContext(FeedbackController.name)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFeedback(@Body() createFeedbackDto: CreateFeedbackRequestDto): Promise<CreateRequestResponseDto> {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to create feedback. [userId=${userId}]`)
    const feedback = this.toFeedback(userId, createFeedbackDto)
    const feedbackResponse = await this.feedbackService.createFeedback(feedback)
    return { id: feedbackResponse.id }
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  async updateFeedback(@Body() updateFeedbackDto: UpdateFeedbackRequestDto) {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to update feedback. [userId=${userId}]`)
    const feedback = this.toFeedback(userId, updateFeedbackDto)
    await this.feedbackService.updateFeedback(feedback.id, feedback)
    return { id: feedback.id }
  }

  private toFeedback(userId: string, feedbackDto): Feedback {
    const feedback = new Feedback()
    feedback.id = feedbackDto.id || undefined
    feedback.userId = userId
    feedback.csat = CustomerSatisfactionScore[feedbackDto.csat]
    feedback.message = feedbackDto.message || undefined
    return feedback
  }
}
