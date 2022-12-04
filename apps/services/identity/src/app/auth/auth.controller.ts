import { Controller, Get, Put } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly logger: PinoLogger) {
    this.logger.setContext(AuthController.name)
  }

  @Get('signup')
  signup() {
    this.logger.info('Signup Call is rolling')
    return 'You called signup'
  }

  @Put('signin')
  signin() {
    // noop
  }
}
