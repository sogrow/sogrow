import { Module } from '@nestjs/common'
import { PrismaModule } from '@sogrow/services/infra/gateway/dal'

@Module({
  imports: [PrismaModule],
  providers: [],
  controllers: [],
})
export class VerificationTokenModule {}
