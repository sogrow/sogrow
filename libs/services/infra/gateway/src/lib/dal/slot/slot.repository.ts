import { BadGatewayException, Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma, Weekday as EntityWeekday } from '@prisma/client'
import { Slot, SlotType, Weekday } from '@sogrow/services/domain/bom'
import BatchPayload = Prisma.BatchPayload

@Injectable()
export class SlotRepository {
  constructor(private readonly logger: PinoLogger, private readonly prisma: PrismaService) {
    this.logger.setContext(SlotRepository.name)
  }

  async getSlotsByUserId(userId: string): Promise<Slot[]> {
    const slot = await this.prisma.slot.findMany({
      where: {
        userId,
      },
    })
    return slot.map((entity) => this.toSlotDomain(entity))
  }

  async createSlots(slots: Slot[]): Promise<BatchPayload> {
    const slotsToCreate = slots.map((slot) => this.toSlotEntity(slot))

    try {
      return this.prisma.slot.createMany({
        data: slotsToCreate,
      })
    } catch (e) {
      this.logger.error(`Error creating slots: ${e.message}`, e.stack)
      throw new BadGatewayException(`UNKNOWN_ERROR`)
    }
  }

  private toSlotEntity(slot: Slot): Prisma.SlotCreateManyInput {
    return {
      userId: slot.userId,
      type: slot.type,
      day: EntityWeekday[slot.day],
      time: slot.time,
      relativeTimeStart: slot.relativeTimeStart,
      relativeTimeEnd: slot.relativeTimeEnd,
    }
  }

  private toSlotDomain(entity: Prisma.SlotGetPayload<{ include: { user: false } }>): Slot {
    const slot = new Slot()
    slot.id = entity.id
    slot.userId = entity.userId
    slot.type = SlotType[entity.type]
    slot.day = Weekday[entity.day]
    slot.time = entity.time ?? null
    slot.relativeTimeStart = entity.relativeTimeStart ?? null
    slot.relativeTimeEnd = entity.relativeTimeEnd ?? null
    return slot
  }
}
