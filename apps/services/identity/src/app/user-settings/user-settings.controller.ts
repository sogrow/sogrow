import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { JwtAuthGuard } from '@sogrow/services/web/auth'
import { RequestContext } from '@sogrow/services/web/context'
import { UserSettingsService } from './user-settings.service'
import { CreateUserSettingsRequestDto } from './dto/CreateUserSettingsRequest.dto'
import { UpdateUserSettingsRequestDto } from './dto/UpdateUserSettingsRequest.dto'
import { SlotPreference, UserSettings } from '@sogrow/services/domain/bom'

@Controller('user-settings')
export class UserSettingsController {
  constructor(private readonly logger: PinoLogger, private readonly userSettingsService: UserSettingsService) {
    this.logger.setContext(UserSettingsController.name)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async get() {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to get user settings for user [userId=${userId}]`)
    return (await this.userSettingsService.getUserSettingsByUserId(userId)) ?? {}
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async post(@Body() body: CreateUserSettingsRequestDto | UpdateUserSettingsRequestDto) {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to create or update user settings for user [userId=${userId}]`)
    return this.userSettingsService.createOrUpdateUserSettingsForUser(userId, this.toUserSettings(body))
  }

  private toUserSettings(dto: CreateUserSettingsRequestDto | UpdateUserSettingsRequestDto): UserSettings {
    const userSettings: UserSettings = {}
    if ('id' in dto) {
      userSettings.id = dto.id
    }
    userSettings.slotPreference = SlotPreference[dto.slotPreference] || undefined
    return userSettings
  }
}
