import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { AuthModule as CommonAuthModule } from '@sogrow/services/auth'

@Module({
  imports: [CommonAuthModule],
  controllers: [AuthController],
})
export class AuthModule {}
