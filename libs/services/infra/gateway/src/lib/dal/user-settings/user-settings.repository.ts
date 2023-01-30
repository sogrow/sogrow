import { PinoLogger } from 'nestjs-pino'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { UserSettings as UserSettingsEntity } from '@prisma/client'
import { SlotPreference, UserSettings } from '@sogrow/services/domain/bom'

@Injectable()
export class UserSettingsRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(UserSettingsRepository.name)
  }

  async getUserSettingsByUserId(userId: string): Promise<UserSettings> {
    const userSettings = await this.prisma.userSettings.findUnique({
      where: {
        userId,
      },
    })

    if (!userSettings) {
      return null
    }

    return this.toUserSettings(userSettings)
  }

  async createUserSettings(userId: string, data) {
    const created = await this.prisma.userSettings.create({
      data: {
        ...data,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    })
    return this.toUserSettings(created)
  }

  async updateUserSettings(userId: string, data) {
    const updated = await this.prisma.userSettings.update({
      where: {
        userId,
      },
      data,
    })

    return this.toUserSettings(updated)
  }

  private toUserSettings(entity: UserSettingsEntity): UserSettings {
    const userSettings: UserSettings = {}
    userSettings.id = entity.id
    userSettings.slotPreference = SlotPreference[entity.slotPreference] || undefined
    return userSettings
  }
}
