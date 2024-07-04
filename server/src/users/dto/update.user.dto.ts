import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
  @ApiProperty()
  @IsEmail()
  email?: string

  @ApiProperty()
  username?: string
}
