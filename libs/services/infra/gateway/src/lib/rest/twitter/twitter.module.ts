import { Module } from '@nestjs/common'
import { TwitterGatewayService } from './twitter-gateway.service'
import { InstrumentationModule } from '@sogrow/services/infra/instrumentation'

@Module({
  imports: [InstrumentationModule],
  providers: [TwitterGatewayService],
  exports: [TwitterGatewayService],
})
export class TwitterModule {}
