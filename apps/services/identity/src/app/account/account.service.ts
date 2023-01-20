import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { Account, Prisma } from '@prisma/client'
import { TwitterGatewayService } from '@sogrow/services/infra/gateway'
import { AccountRepository, UserRepository } from '@sogrow/services/infra/gateway/dal'
import { ConfigService } from '@nestjs/config'
import { AuthService } from '@sogrow/services/web/auth'

@Injectable()
export class AccountService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly configService: ConfigService,

    private readonly authService: AuthService,
    private readonly twitterGateway: TwitterGatewayService,
    private readonly accountRepository: AccountRepository,
    private readonly userRepository: UserRepository,
  ) {
    this.logger.setContext(AccountService.name)
  }

  async linkAccount(account: Prisma.AccountCreateInput) {
    this.logger.info(`Received request to link account. [$accountID=${account.providerAccountId}, provider=${account.provider}]`)
    // Get Account from DB
    const existingAccount = await this.accountRepository.getAccountByProviderAccountId(account.providerAccountId, account.provider)

    let savedAccount: Account
    if (!existingAccount) {
      this.logger.info(
        `Account does not exist. Creating new account. [accountId=${account.providerAccountId}, provider=${account.provider}]`,
      )
      savedAccount = await this.accountRepository.createAccount(account)
    } else {
      this.logger.info(`Account already exists. Updating account. [accountId=${account.providerAccountId}, provider=${account.provider}]`)
      savedAccount = await this.accountRepository.updateAccount(account.providerAccountId, account.provider, account)
    }

    const user = await this.userRepository.getUserById(savedAccount.userId)
    const userFollowers = await this.twitterGateway.getUserFollowersCount(savedAccount.access_token)

    if (!user.trialEndsAt) {
      this.logger.info(`User has no trial. Setting trial end date. [userId=${user.id}]`)
      user.calculateTrialEndsAt(userFollowers)
    }

    this.logger.info(`Updating user. [userId=${user.id}]`)
    const userToUpdate = UserRepository.toUserEntity(Object.assign(user, { followersCount: userFollowers }))
    await this.userRepository.updateUser(user.id, userToUpdate)

    this.logger.info(`Account linked. [accountId=${account.providerAccountId}, provider=${account.provider}]`)
    return savedAccount
  }

  async exchangeToken(providerAccountId: Account['providerAccountId'], provider: string, bearer: string) {
    this.logger.info(`Token exchange start [provider=${providerAccountId}, provider=${provider}]`)
    /**
     * We actually do not need the user, but while fetching the data we can make sure, that the token we
     * received is valid and the customer gave their consent to access their Account on their behalf.
     */
    await this.twitterGateway.getUserInfo(this.getTokenFromBearer(bearer))
    const user = await this.accountRepository.getUserByAccount(providerAccountId, provider)
    return this.authService.createJwtToken(user)
  }

  private getTokenFromBearer(bearer: string) {
    return bearer.replace('Bearer ', '')
  }
}
