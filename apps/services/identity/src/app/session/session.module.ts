import { Module } from '@nestjs/common'
import { SessionController } from './session.controller'
import { PrismaModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [PrismaModule],
  providers: [],
  controllers: [SessionController],
})
export class SessionModule {}
