import { Module } from '@nestjs/common'
import { AxiosClientFactory } from './axios-client-factory.service'

@Module({
  imports: [],
  providers: [AxiosClientFactory],
  exports: [AxiosClientFactory],
})
export class InstrumentationModule {}
