import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { PrismaService } from './prisma.service'

@Module({
  imports: [],
  providers: [PrismaService],
  controllers: [UserController],
})
export class UserModule {}
