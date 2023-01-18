import { Body, Controller, Delete, Get, Ip, NotFoundException, Param, Post, Put, Query } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { AdapterUser } from 'next-auth/adapters'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'
import { CoreUtils } from '@sogrow/services/domain/util'
import { IpRegistryGatewayService } from '@sogrow/services/infra/gateway'

@Controller('user')
export class UserController {
  constructor(
    private readonly logger: PinoLogger,
    private readonly prisma: PrismaService,
    private readonly ipRegistryGatewayService: IpRegistryGatewayService,
  ) {
    this.logger.setContext(UserController.name)
  }

  @Post('signup')
  createUser(@Body() data: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    this.logger.info(`Received request to create user.`)
    return this.prisma.user.create({ data })
  }

  @Get()
  getUser(@Query() query: { id?: string; email?: string }): Promise<AdapterUser> {
    if (query?.id) {
      this.logger.info(`Received request to get user [id=${query.id}]`)
      return this.prisma.user.findUnique({ where: { id: query.id } })
    } else if (query?.email) {
      this.logger.info(`Received request to get user [email=${CoreUtils.hideSensitive(query.email)}]`)
      return this.prisma.user.findUnique({ where: { email: query.email } })
    }
    this.logger.warn(`User not found`)
    throw new NotFoundException('USER_NOT_FOUND')
  }

  @Get('geo')
  getGeoLocation(@Ip() ip: string) {
    this.logger.info(`Received request to get user location.`)
    return this.ipRegistryGatewayService.getIpInfo(ip)
  }

  @Put(':id')
  updateUser(@Param() id: string, @Body() data: Partial<AdapterUser>): Promise<AdapterUser> {
    this.logger.info(`Received request to update user [id=${id}]`)
    return this.prisma.user.update({ where: { id }, data })
  }

  @Delete(':id')
  deleteUser(@Param() id: string): Promise<AdapterUser> {
    this.logger.info(`Receive request to delete user [id=${id}]`)
    return this.prisma.user.delete({ where: { id } })
  }
}
