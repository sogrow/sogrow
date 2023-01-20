import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { IpregistryModule } from '@sogrow/services/infra/gateway'
import { UserService } from './user.service'

@Module({
  imports: [DalModule, IpregistryModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
