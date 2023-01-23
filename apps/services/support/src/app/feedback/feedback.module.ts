import { Module } from '@nestjs/common'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { FeedbackController } from './feedback.controller'
import { FeedbackService } from './feedback.service'

@Module({
  imports: [DalModule],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
