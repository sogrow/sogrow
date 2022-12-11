import { Controller, Get, Request } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user
  }

  @Get('hello')
  getData() {
    return 'Hello from AWS Lambda!'
  }
}
