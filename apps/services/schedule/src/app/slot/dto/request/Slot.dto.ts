import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class SlotDto {
  @IsOptional()
  @IsString()
  id?: string

  @IsNotEmpty()
  @IsString()
  @IsEnum(['FIXED', 'RELATIVE'])
  type: string

  @IsNotEmpty()
  @IsString()
  @IsEnum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'])
  day: string

  @IsOptional()
  @IsString()
  time: string

  @IsOptional()
  @IsString()
  relativeTimeStart: string

  @IsOptional()
  @IsString()
  relativeTimeEnd: string
}
