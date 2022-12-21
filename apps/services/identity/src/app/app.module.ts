import { Module } from '@nestjs/common'
import { LoggerModule } from '@sogrow/services/infra/observation'

import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { SessionModule } from './session/session.module'
import { AccountModule } from './account/account.module'
import { AuthModule } from '@sogrow/services/web/auth'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot(), AuthModule, UserModule, SessionModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
