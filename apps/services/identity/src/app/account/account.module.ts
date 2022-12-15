import { Module } from '@nestjs/common'
import { AccountController } from './account.controller'
import { PrismaModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [PrismaModule],
  providers: [],
  controllers: [AccountController],
})
export class AccountModule {}
