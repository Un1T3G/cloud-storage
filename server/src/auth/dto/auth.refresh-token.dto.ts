import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class AuthRefreshTokenDto {
  @ApiProperty()
  @IsNotEmpty()
  refreshToken: string
}
