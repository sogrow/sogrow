import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  hello() {
    return 'Hello from AWS Identity Lambda!'
  }
  @Get()
  getData() {
    return this.appService.getData()
  }
}
