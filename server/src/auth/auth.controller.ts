import { Body, Controller, Post } from '@nestjs/common'
import { AuthSignInDto } from './dto/auth.sign-in.dto'
import { AuthSignUpDto } from './dto/auth.sign-up.dto'
import { AuthRefreshTokenDto } from './dto/auth.refresh-token.dto'
import { AuthService } from './auth.service'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(@Body() dto: AuthSignInDto) {
    return this.authService.signIn(dto)
  }

  @Post('access-token')
  async getAccessToken(@Body() refreshToken: AuthRefreshTokenDto) {
    return this.authService.refreshToken(refreshToken)
  }

  @Post('sign-up')
  async signUp(@Body() dto: AuthSignUpDto) {
    return this.authService.signUp(dto)
  }
}
