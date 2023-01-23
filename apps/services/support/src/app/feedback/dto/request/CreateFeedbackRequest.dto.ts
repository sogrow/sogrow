import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateFeedbackRequestDto {
  @IsString()
  @IsEnum(['VERY_DISSATISFIED', 'DISSATISFIED', 'NEUTRAL', 'SATISFIED', 'VERY_SATISFIED'])
  csat: string

  @IsOptional()
  @IsString()
  @MaxLength(512)
  message?: string
}
