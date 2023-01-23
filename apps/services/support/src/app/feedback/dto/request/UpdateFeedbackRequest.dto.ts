import { IsString, MaxLength } from 'class-validator'

export class UpdateFeedbackRequestDto {
  @IsString()
  id: string
  @IsString()
  @MaxLength(512)
  message: string
}
