import { Module } from '@nestjs/common'
import { DalModule } from '@sogrow/services/infra/gateway/dal'
import { SlotController } from './slot.controller'
import { SlotService } from './slot.service'

@Module({
  imports: [DalModule],
  providers: [SlotService],
  controllers: [SlotController],
})
export class SlotModule {}
