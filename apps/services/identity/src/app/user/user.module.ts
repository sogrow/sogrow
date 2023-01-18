import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { IpregistryModule } from '@sogrow/services/infra/gateway'

@Module({
  imports: [DalModule, IpregistryModule],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
