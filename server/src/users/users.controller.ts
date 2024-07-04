import { Body, Controller, Get, Put } from '@nestjs/common'

import { User } from './decorators/user.decorator'
import { UsersService } from './users.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ApiTags } from '@nestjs/swagger'
import { UpdateUserDto } from './dto/update.user.dto'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('profile')
  @Auth()
  async getProfile(@User('id') userId: number) {
    const user = await this.usersService.getById(userId)
    return this.usersService.buildUserResponse(user)
  }

  @Put('profile')
  @Auth()
  async updateProfile(@User('id') userId: number, @Body() dto: UpdateUserDto) {
    const user = await this.usersService.update(userId, dto)
    return this.usersService.buildUserResponse(user)
  }
}
