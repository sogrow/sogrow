import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'
import { AdapterUser } from 'next-auth/adapters'
import { Account, Prisma } from '@prisma/client'

@Controller('account')
export class AccountController {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
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

  @Delete()
  unlinkAccount(
    @Query() query: { providerAccountId: Account['providerAccountId']; provider: string },
  ): Prisma.Prisma__AccountClient<Account, never> {
    this.logger.info(`Received request to unlink account [providerAccountId=${query.providerAccountId}, provider=${query.provider}]`)
    return this.prisma.account.delete({
      where: { provider_providerAccountId: { providerAccountId: query.providerAccountId, provider: query.provider } },
    })
  }
}
