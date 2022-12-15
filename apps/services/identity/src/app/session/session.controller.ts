import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'
import { AdapterSession } from 'next-auth/adapters'
import { CoreUtils } from '@sogrow/services/domain/util'
import { mockSession } from 'next-auth/client/__tests__/helpers/mocks'
import user = mockSession.user

@Controller('session')
export class SessionController {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(SessionController.name)
  }

  @HttpCode(201)
  @Post()
  createSession(@Body() data: { sessionToken: string; userId: string; expires: Date }): Promise<AdapterSession> {
    this.logger.info(`Received request to create session for user [id=${data.userId}]`)
    return this.prisma.session.create({ data })
  }

  @Get()
  async getSessionAndUser(@Query() query: { sessionToken: string }) {
    this.logger.info(`Received request to get session ans user for session [sessionToken=${CoreUtils.hideSensitive(query.sessionToken)}]`)
    const userAndSession = await this.prisma.session.findUnique({
      where: { sessionToken: query.sessionToken },
      include: { user: true },
    })
    if (!userAndSession) {
      return null
    }
    const { user, ...session } = userAndSession
    return { user, session }
  }

  @Put(':userId')
  updateSession(
    @Param() userId: string,
    @Body() data: Partial<AdapterSession> & Pick<AdapterSession, 'sessionToken'>,
  ): Promise<AdapterSession> {
    console.log(`Received request to update session for user [id=${userId}]`)
    return this.prisma.session.update({ where: { sessionToken: data.sessionToken }, data })
  }

  @HttpCode(204)
  @Delete()
  async deleteSession(@Query() query: { sessionToken: string }): Promise<AdapterSession> {
    this.logger.info(`Received request to delete session [sessionToken=${CoreUtils.hideSensitive(query.sessionToken)}]`)
    return this.prisma.session.delete({ where: { sessionToken: query.sessionToken } })
  }
}
