import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { compare, genSalt, hash } from 'bcryptjs'
import { UsersService } from '../users/users.service'
import { AuthSignInDto } from './dto/auth.sign-in.dto'
import { AuthRefreshTokenDto } from './dto/auth.refresh-token.dto'
import { AuthSignUpDto } from './dto/auth.sign-up.dto'
import { AuthResponse } from './interfaces/auth.response'
import { AuthTokensResponse } from './interfaces/auth.tokens.response'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(dto: AuthSignInDto): Promise<AuthResponse> {
    const user = await this.validateUser(dto)
    const tokens = await this.issueTokenPair(user.id)

    return {
      user: this.usersService.buildUserResponse(user),
      tokens,
    }
  }

  async refreshToken(dto: AuthRefreshTokenDto): Promise<AuthTokensResponse> {
    const result = await this.jwtService.verifyAsync(dto.refreshToken, {
      secret: process.env.JWT_SECRET_KEY,
    })

    if (!result) {
      throw new UnauthorizedException('Invalid token or expired!')
    }

    const user = await this.usersService.getById(result.id)
    const tokens = await this.issueTokenPair(user.id)

    return tokens
  }

  async signUp(dto: AuthSignUpDto): Promise<AuthResponse> {
    const salt = await genSalt(10)

    const user = await this.usersService.create({
      ...dto,
      password: await hash(dto.password, salt),
    })

    const tokens = await this.issueTokenPair(user.id)

    return {
      user: this.usersService.buildUserResponse(user),
      tokens,
    }
  }

  private async issueTokenPair(userId: number): Promise<AuthTokensResponse> {
    const data = { id: userId }

    const refreshToken = await this.jwtService.signAsync(data, {
      expiresIn: '15d',
      secret: process.env.JWT_SECRET_KEY,
    })

    const accessToken = await this.jwtService.signAsync(data, {
      expiresIn: '1h',
      secret: process.env.JWT_SECRET_KEY,
    })

    return { refreshToken, accessToken }
  }

  private async validateUser({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    const user = await this.usersService.getByEmail(email)

    if (!user) {
      throw new UnauthorizedException('User not found')
    }

    const isValidPassword = await compare(password, user.password)

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid password')
    }

    return user
  }
}
