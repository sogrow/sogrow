import { MiddlewareConsumer, Module } from '@nestjs/common'

import { ConfigModule } from '@nestjs/config'
import { LoggerModule } from '@sogrow/services/infra/observation'
import { AuthModule } from '@sogrow/services/web/auth'
import { RequestContextMiddleware } from '@sogrow/services/web/context'
import { DalModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot(), AuthModule, DalModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*')
  }
}
