import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { Account } from '@prisma/client'
import { TwitterGatewayService } from '@sogrow/services/infra/gateway'
import { AccountRepository } from '@sogrow/services/infra/gateway/dal'
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
  ) {}

  async exchangeToken(providerAccountId: Account['providerAccountId'], provider: string, token: string) {
    this.logger.info(`Token exchange start [provider=${providerAccountId}, provider=${provider}]`)
    /**
     * We actually do not need the user, but while fetching the data we can make sure, that the token we
     * received is valid and the customer gave their consent to access their Account on their behalf.
     */
    await this.twitterGateway.getUserInfo(token)
    const user = await this.accountRepository.getUserByAccount(providerAccountId, provider)
    return this.authService.createJwtToken(user)
  }
}
