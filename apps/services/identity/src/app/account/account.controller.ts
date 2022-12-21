import { Body, Controller, Delete, Get, Headers, Post, Query, UnauthorizedException } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'
import { AdapterUser } from 'next-auth/adapters'
import { Account, Prisma } from '@prisma/client'
import { AccountService } from './account.service'
import axios from 'axios'

@Controller('account')
export class AccountController {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly accountService: AccountService,
  ) {
    this.logger.setContext(AccountController.name)
  }

  @Post()
  lintAccount(@Body() data: Prisma.AccountCreateInput): Prisma.Prisma__AccountClient<Account, never> {
    this.logger.info(`Received request to link account.`)
    return this.prisma.account.create({ data })
  }

  @Get('user')
  async getUserByAccount(@Query() query: { providerAccountId: Account['providerAccountId']; provider: string }): Promise<AdapterUser> {
    this.logger.info(`Received request to get user by account [providerAccountId=${query.providerAccountId}, provider=${query.provider}]`)
    const account = await this.prisma.account.findUnique({
      where: { provider_providerAccountId: { providerAccountId: query.providerAccountId, provider: query.provider } },
      select: { user: true },
    })
    return account?.user || null
  }

  @Get('token-exchange')
  async exchangeToken(
    @Query() query: { providerAccountId: Account['providerAccountId']; provider: string },
    @Headers('authorization') bearer: string,
  ) {
    this.logger.info(`Received request to exchange token [provider=${query.provider}]`)
    this.assertProviderIsKnown(query.provider)
    const token = this.assertBearerTokenIsPresent(bearer)
    const access_token = await this.accountService.exchangeToken(query.providerAccountId, query.provider, token)
    this.logger.info(`Access Token successfully exchanged`)
    return { access_token }
  }

  @Delete()
  unlinkAccount(
    @Query() query: { providerAccountId: Account['providerAccountId']; provider: string },
  ): Prisma.Prisma__AccountClient<Account, never> {
    this.logger.info(`Received request to unlink account [providerAccountId=${query.providerAccountId}, provider=${query.provider}]`)
    return this.prisma.account.delete({
      where: { provider_providerAccountId: { providerAccountId: query.providerAccountId, provider: query.provider } },
    })
  }

  private assertProviderIsKnown(provider: string) {
    if (provider !== 'twitter') {
      this.logger.warn(`Invalid provider`)
      throw new UnauthorizedException(`UNAUTHORIZED`)
    }
  }

  private assertBearerTokenIsPresent(bearer?: string) {
    if (!bearer) {
      this.logger.warn(`Invalid or empty bearer token provided`)
      throw new UnauthorizedException(`UNAUTHORIZED`)
    }

    if (!bearer.startsWith('Bearer')) {
      this.logger.warn(`Invalid or empty bearer token provided`)
      throw new UnauthorizedException(`UNAUTHORIZED`)
    }
    return bearer.split(' ')[1]
  }
}
