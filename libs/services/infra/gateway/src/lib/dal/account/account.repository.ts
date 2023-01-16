import { Injectable, NotFoundException } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '../prisma/prisma.service'
import { User, UserPlan, UserRole } from '@sogrow/services/domain/bom'
import { PrismaModel } from '../generated'

@Injectable()
export class AccountRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(AccountRepository.name)
  }

  async getUserByAccount(accountId: string, provider: string): Promise<User> {
    const account = await this.prisma.account.findUnique({
      where: { provider_providerAccountId: { providerAccountId: accountId, provider } },
      select: { user: true },
    })
    if (account) {
      return this.toUser(account.user)
    }
    throw new NotFoundException(`User for account (accountId=${accountId}, provider=${provider}) has not been found.`)
  }

  private toUser(entity: Omit<PrismaModel.User, 'accounts' | 'sessions' | 'feedback' | 'socialAccounts' | 'slots' | 'posts'>): User {
    const user = new User()
    user.id = entity.id
    user.name = entity.name || ''
    user.email = entity.email || ''
    user.picture = entity.image || ''
    user.completedOnboarding = entity.completedOnboarding || false
    user.userPlan = UserPlan[entity.userPlan] || UserPlan.TRIAL
    user.userRole = UserRole[entity.userRole] || UserRole.USER
    user.locale = entity.locale || ''
    user.country = entity.country || ''
    user.timeZone = entity.timeZone || ''
    user.followersCount = entity.followersCount || 0
    return user
  }
}
