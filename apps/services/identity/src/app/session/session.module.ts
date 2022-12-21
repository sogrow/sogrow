import { Module } from '@nestjs/common'
import { SessionController } from './session.controller'
import { DalModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [DalModule],
  providers: [],
  controllers: [SessionController],
})
export class SessionModule {}
