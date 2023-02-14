import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { UserSettingsRepository } from '@sogrow/services/infra/gateway/dal'
import { UserSettings } from '@sogrow/services/domain/bom'

@Injectable()
export class UserSettingsService {
  constructor(private readonly logger: PinoLogger, private readonly userSettingsRepository: UserSettingsRepository) {
    this.logger.setContext(UserSettingsService.name)
  }

  async getUserSettingsByUserId(userId: string) {
    return this.userSettingsRepository.getUserSettingsByUserId(userId)
  }

  async createOrUpdateUserSettingsForUser(userId: string, userSettings: UserSettings) {
    const persistedUserSettings = await this.userSettingsRepository.getUserSettingsByUserId(userId)

    if (persistedUserSettings) {
      this.logger.info(`Updating user settings for user [userId=${userId}]`)
      return this.userSettingsRepository.updateUserSettings(userId, userSettings)
    }

    this.logger.info(`Creating user settings for user [userId=${userId}]`)
    return this.userSettingsRepository.createUserSettings(userId, userSettings)
  }
}
