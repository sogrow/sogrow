import { Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { Account } from '@prisma/client'
import { TwitterGatewayService } from '@sogrow/services/infra/gateway'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'

@Injectable()
export class AccountService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly twitterGateway: TwitterGatewayService,
    private readonly prisma: PrismaService,
  ) {}

  async exchangeToken(providerAccountId: Account['providerAccountId'], provider: string, token: string) {
    this.logger.info(`Token exchange starte [provider=${providerAccountId}, provider=${provider}]`)
    /**
     * We actually do not need the user, but while fetching the data we can make sure, that the token we
     * received is valid and the customer gave their consent to access their Account on their behalf.
     */
    await this.twitterGateway.getUserInfo(token)

    return user
  }
}
