import { Module } from '@nestjs/common'
import { AccountRepository } from './account/account.repository'
import { PrismaService } from './prisma/prisma.service'

@Module({
  imports: [],
  providers: [AccountRepository, PrismaService],
  exports: [AccountRepository, PrismaService],
})
export class DalModule {}
