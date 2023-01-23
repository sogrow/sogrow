import { SlackWebhookGatewayService } from './slack-webhook-gateway.service'
import { InstrumentationModule } from '@sogrow/services/infra/instrumentation'
import { Module } from '@nestjs/common'

@Module({
  imports: [InstrumentationModule],
  providers: [SlackWebhookGatewayService],
  exports: [SlackWebhookGatewayService],
})
export class SlackModule {}
