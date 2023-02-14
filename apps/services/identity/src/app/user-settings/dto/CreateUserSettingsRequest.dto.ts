import { IsEnum, IsOptional, IsString } from 'class-validator'

export class CreateUserSettingsRequestDto {
  @IsOptional()
  @IsString()
  @IsEnum(['AUTO', 'MANUAL'])
  slotPreference?: string
}
