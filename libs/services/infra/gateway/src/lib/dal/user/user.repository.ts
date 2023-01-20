import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma, User as UserEntity } from '@prisma/client'
import { User, UserPlan, UserRole } from '@sogrow/services/domain/bom'

@Injectable()
export class UserRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(UserRepository.name)
  }

  async getUserById(id: string): Promise<User> {
    const userEntity = await this.prisma.user.findUnique({ where: { id } })
    return this.toUser(userEntity)
  }

  async createUser(user): Promise<User> {
    const userEntity = await this.prisma.user.create({ data: user })
    return this.toUser(userEntity)
  }

  async updateUser(id: string, user: Prisma.UserUpdateInput): Promise<User> {
    const userEntity = await this.prisma.user.update({
      where: { id },
      data: user,
    })
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
    user.followersCount = userEntity.followersCount
    return user
  }

  static toUserEntity(user: User): Prisma.UserUpdateInput {
    return {
      id: user.id,
      name: user.name,
      email: user?.email || null,
      image: user.image || null,
      completedOnboarding: user.completedOnboarding,
      userPlan: user.userPlan,
      userRole: user.userRole,
      locale: user.locale,
      country: user.country,
      timeZone: user.timeZone,
      followersCount: user.followersCount,
      trialEndsAt: user.trialEndsAt.toString(),
    }
  }
}
