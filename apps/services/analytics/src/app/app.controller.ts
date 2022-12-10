import { Controller, Get, Request, UseGuards } from '@nestjs/common'

import { AppService } from './app.service'
import { JwtAuthGuard } from '@sogrow/services/auth'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user
  }

  @Get('hello')
  getData() {
    return 'Hello from AWS Lambda!'
  }
}
