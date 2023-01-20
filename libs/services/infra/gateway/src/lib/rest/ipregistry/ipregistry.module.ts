import { Module } from '@nestjs/common'
import { IpRegistryGatewayService } from './ipregistry-gateway.service'

@Module({
  providers: [IpRegistryGatewayService],
  exports: [IpRegistryGatewayService],
})
export class IpregistryModule {}
