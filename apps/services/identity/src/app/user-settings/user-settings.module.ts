import { Module } from '@nestjs/common'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { UserSettingsService } from './user-settings.service'
import { UserSettingsController } from './user-settings.controller'

@Module({
  imports: [DalModule],
  providers: [UserSettingsService],
  controllers: [UserSettingsController],
})
export class UserSettingsModule {}
