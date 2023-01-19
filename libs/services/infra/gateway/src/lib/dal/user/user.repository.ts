import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '../prisma/prisma.service'
import { User as UserEntity } from '@prisma/client'
import { User, UserPlan, UserRole } from '@sogrow/services/domain/bom'

@Injectable()
export class UserRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(UserRepository.name)
  }

  async createUser(user): Promise<User> {
    this.logger.info({ user }, 'createUser')
    const userEntity = await this.prisma.user.create({ data: user })
    return this.toUser(userEntity)
  }

  toUser(userEntity: UserEntity): User {
    const user = new User()
    user.id = userEntity.id
    user.name = userEntity.name
    user.email = userEntity?.email || ''
    user.image = userEntity.image
    user.completedOnboarding = userEntity.completedOnboarding
    user.userPlan = UserPlan[userEntity.userPlan]
    user.userRole = UserRole[userEntity.userRole]
    user.locale = userEntity.locale
    user.country = userEntity.country
    user.timeZone = userEntity.timeZone
    return user
  }
}
