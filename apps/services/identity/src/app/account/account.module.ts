import { Module } from '@nestjs/common'
import { AccountController } from './account.controller'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { AccountService } from './account.service'
import { TwitterModule } from '@sogrow/services/infra/gateway'

@Module({
  imports: [DalModule, TwitterModule],
  providers: [AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
