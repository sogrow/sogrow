import { IsOptional, IsString } from 'class-validator'
import { CreateUserSettingsRequestDto } from './CreateUserSettingsRequest.dto'

export class UpdateUserSettingsRequestDto extends CreateUserSettingsRequestDto {
  @IsOptional()
  @IsString()
  id?: string
}
