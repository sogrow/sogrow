import { Module } from '@nestjs/common'
import { LoggerModule } from '@sogrow/services/infra/observation'

import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { SessionModule } from './session/session.module'
import { AccountModule } from './account/account.module'
import { VerificationTokenModule } from './verification-token/verification-token.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    UserModule,
    SessionModule,
    AccountModule,
    VerificationTokenModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
