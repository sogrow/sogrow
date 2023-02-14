import { MiddlewareConsumer, Module } from '@nestjs/common'
import { LoggerModule } from '@sogrow/services/infra/observation'

import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { SessionModule } from './session/session.module'
import { AccountModule } from './account/account.module'
import { AuthModule } from '@sogrow/services/web/auth'
import { RequestContextMiddleware } from '@sogrow/services/web/context'
import { UserSettingsModule } from './user-settings/user-settings.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    AuthModule,
    UserModule,
    UserSettingsModule,
    SessionModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes('*')
  }
}
