import { Injectable, NotFoundException } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '../prisma/prisma.service'
import { TrialEndDate, User, UserPlan, UserRole } from '@sogrow/services/domain/bom'
import { Account, Prisma } from '@prisma/client'

@Injectable()
export class AccountRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(AccountRepository.name)
  }

  async getAccountByProviderAccountId(providerAccountId: string, provider: string): Promise<Account> {
    return this.prisma.account.findUnique({
      where: { provider_providerAccountId: { providerAccountId, provider } },
    })
  }

  async createAccount(data: Prisma.AccountCreateInput): Promise<Account> {
    return this.prisma.account.create({
      data,
    })
  }

  async updateAccount(accountId: string, provider: string, data: Prisma.AccountUpdateInput): Promise<Account> {
    return this.prisma.account.update({
      where: { provider_providerAccountId: { providerAccountId: accountId, provider } },
      data,
    })
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

  private toUser(entity: Prisma.UserGetPayload<{ user: boolean }['user']>): User {
    const user = new User()
    user.id = entity.id
    user.name = entity.name || ''
    user.email = entity.email || ''
    user.image = entity.image || ''
    user.completedOnboarding = entity.completedOnboarding || false
    user.userPlan = UserPlan[entity.userPlan] || UserPlan.TRIAL
    user.userRole = UserRole[entity.userRole] || UserRole.USER
    user.locale = entity.locale || ''
    user.country = entity.country || ''
    user.timeZone = entity.timeZone || ''
    user.followersCount = entity.followersCount || 0
    user.trialEndsAt = TrialEndDate.ofSafely(entity.trialEndsAt) || null
    return user
  }
}
