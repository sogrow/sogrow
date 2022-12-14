import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { PrismaModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [PrismaModule],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
