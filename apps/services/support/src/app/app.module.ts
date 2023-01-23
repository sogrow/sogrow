import { MiddlewareConsumer, Module } from '@nestjs/common'
import { LoggerModule } from '@sogrow/services/infra/observation'

import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '@sogrow/services/web/auth'
import { RequestContextMiddleware } from '@sogrow/services/web/context'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { FeedbackModule } from './feedback/feedback.module'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot(), AuthModule, DalModule, FeedbackModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*')
  }
}
