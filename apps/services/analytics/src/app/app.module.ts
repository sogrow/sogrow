import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { LoggerModule } from '@sogrow/services/infra/observation'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
