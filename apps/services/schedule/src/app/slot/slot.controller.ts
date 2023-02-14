import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common'
import { SlotService } from './slot.service'
import { PinoLogger } from 'nestjs-pino'
import { JwtAuthGuard } from '@sogrow/services/web/auth'
import { RequestContext } from '@sogrow/services/web/context'
import { SetupSlotRequestDto } from './dto/request/SetupSlotRequest.dto'
import { SlotDto } from './dto/request/Slot.dto'
import { Slot, SlotType, Weekday } from '@sogrow/services/domain/bom'

@Controller('slots')
export class SlotController {
  constructor(private readonly logger: PinoLogger, private readonly slotService: SlotService) {
    this.logger.setContext(SlotController.name)
  }

  @Post('setup')
  @UseGuards(JwtAuthGuard)
  async setup(@Body() setupSlotsDto: SetupSlotRequestDto) {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to setup slots for user [userId=${userId}]`)
    const slots = setupSlotsDto.slots.map((slot) => this.toSlots(slot, userId))
    return this.slotService.setupSlots(userId, slots)
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async get() {
    const userId = RequestContext.getUserId()
    this.logger.info(`Received request to get slots for user [userId=${userId}]`)
    return this.slotService.getSlotsByUserId(userId)
  }

  private toSlots(dto: SlotDto, userId: string): Slot {
    const slot = new Slot()
    slot.id = dto.id
    slot.userId = userId
    slot.type = SlotType[dto.type]
    slot.day = Weekday[dto.day]
    slot.time = dto.time
    slot.relativeTimeStart = dto.relativeTimeStart
    slot.relativeTimeEnd = dto.relativeTimeEnd
    return slot
  }
}
