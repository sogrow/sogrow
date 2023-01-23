import { Module } from '@nestjs/common'
import { AccountRepository } from './account/account.repository'
import { PrismaService } from './prisma/prisma.service'
import { UserRepository } from './user/user.repository'
import { FeedbackRepository } from './feedback/feedback.repository'

@Module({
  imports: [],
  providers: [AccountRepository, UserRepository, FeedbackRepository, PrismaService],
  exports: [AccountRepository, UserRepository, FeedbackRepository, PrismaService],
})
export class DalModule {}
