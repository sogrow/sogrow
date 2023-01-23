import { MiddlewareConsumer, Module } from '@nestjs/common'
import { LoggerModule } from '@sogrow/services/infra/observation'

import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '@sogrow/services/web/auth'
import { RequestContextMiddleware } from '@sogrow/services/web/context'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { AppController } from './app.controller'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot(), AuthModule, DalModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*')
  }
}
