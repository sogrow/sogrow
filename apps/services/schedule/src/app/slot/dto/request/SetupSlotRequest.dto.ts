import { SlotDto } from './Slot.dto'
import { IsNotEmpty } from 'class-validator'

export class SetupSlotRequestDto {
  @IsNotEmpty()
  slots: SlotDto[]
}
