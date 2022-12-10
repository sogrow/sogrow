import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { AdapterUser } from 'next-auth/adapters'
import { PrismaService } from './prisma.service'

@Controller('user')
export class UserController {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(UserController.name)
  }

  @Post('signup')
  createUser(@Body() data: Omit<AdapterUser, 'id'>): Promise<AdapterUser> {
    this.logger.info(`Received request to create user.`)
    return this.prisma.user.create({ data })
  }

  @Get(':id')
  getUser(@Param() params): Promise<AdapterUser> {
    this.logger.info(`Received request to get user [id=${params.id}]`)
    return this.prisma.user.findUnique({ where: { id: params.id } })
  }

  @Get()
  getHello() {
    return 'Hello from Identity'
  }
}
