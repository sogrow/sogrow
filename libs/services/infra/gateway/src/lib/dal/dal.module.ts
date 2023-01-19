import { Module } from '@nestjs/common'
import { AccountRepository } from './account/account.repository'
import { PrismaService } from './prisma/prisma.service'
import { UserRepository } from './user/user.repository'

@Module({
  imports: [],
  providers: [AccountRepository, UserRepository, PrismaService],
  exports: [AccountRepository, UserRepository, PrismaService],
})
export class DalModule {}
