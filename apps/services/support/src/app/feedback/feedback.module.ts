import { Module } from '@nestjs/common'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { FeedbackController } from './feedback.controller'
import { FeedbackService } from './feedback.service'
import { SlackModule } from '@sogrow/services/infra/gateway'

@Module({
  imports: [DalModule, SlackModule],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
