import { Module } from '@nestjs/common'
import { LoggerModule } from '@sogrow/services/infra/observation'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule, LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
