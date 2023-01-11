import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { DalModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [DalModule],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
