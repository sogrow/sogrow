import { BadRequestException, Injectable } from '@nestjs/common'
import { PinoLogger } from 'nestjs-pino'
import { SlotRepository } from '@sogrow/services/infra/gateway/dal'
import { Slot } from '@sogrow/services/domain/bom'

@Injectable()
export class SlotService {
  constructor(private readonly logger: PinoLogger, private readonly slotRepository: SlotRepository) {}

  async setupSlots(userId: string, slots: Slot[]) {
    this.logger.info(`Received request to setup slots for user [userId=${userId}]`)
    const existingSlots = await this.slotRepository.getSlotsByUserId(userId)

    if (existingSlots.length !== 0) {
      throw new BadRequestException(`Slots already exist for user=${userId}`)
    }

    const createdSlots = await this.slotRepository.createSlots(slots)
    this.logger.info(`Created slots for user [userId=${userId}]`)
    return createdSlots
  }

  async getSlotsByUserId(userId: string): Promise<Slot[]> {
    this.logger.info(`Received request to get slots for user [userId=${userId}]`)
    return this.slotRepository.getSlotsByUserId(userId)
  }
}
