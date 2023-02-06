import { Module } from '@nestjs/common'
import { AccountRepository } from './account/account.repository'
import { PrismaService } from './prisma/prisma.service'
import { UserRepository } from './user/user.repository'
import { FeedbackRepository } from './feedback/feedback.repository'
import { UserSettingsRepository } from './user-settings/user-settings.repository'
import { SlotRepository } from './slot/slot.repository'

@Module({
  imports: [],
  providers: [AccountRepository, UserRepository, UserSettingsRepository, FeedbackRepository, SlotRepository, PrismaService],
  exports: [AccountRepository, UserRepository, UserSettingsRepository, FeedbackRepository, SlotRepository, PrismaService],
})
export class DalModule {}
