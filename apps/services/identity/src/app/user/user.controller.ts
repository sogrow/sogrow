import { Body, Controller, Delete, Get, Ip, NotFoundException, Param, Post, Put, Query, UseGuards } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { AdapterUser } from 'next-auth/adapters'
import { PrismaService } from '@sogrow/services/infra/gateway/dal'
import { CoreUtils } from '@sogrow/services/domain/util'
import { UserService } from './user.service'
import { User } from '@sogrow/services/domain/bom'
import { JwtAuthGuard } from '@sogrow/services/web/auth'
import { RequestContext } from '@sogrow/services/web/context'

@Controller('user')
export class UserController {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService, private readonly userService: UserService) {
    this.logger.setContext(UserController.name)
  }

  @Post('signup')
  async createUser(@Body() data: Omit<AdapterUser, 'id'>, @Ip() ip: string): Promise<AdapterUser> {
    this.logger.info(`Received request to create user.`)
    const user = await this.userService.createUser(data, ip)
    return this.toAdapterUser(user)
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

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe() {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to get current user [id=${userId}]`)
    return this.userService.getUserBy(userId)
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

  toAdapterUser(user: User): AdapterUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
      emailVerified: null,
    }
  }
}
