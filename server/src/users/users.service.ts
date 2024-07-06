import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { Repository } from 'typeorm'
import { UserEntity } from './entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create.user.dto'
import { UpdateUserDto } from './dto/update.user.dto'
import { User } from './interfaces/user.interface'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  private async checkHasByEmailAndUsername(dto: {
    email: string
    username: string
  }) {
    await this.getByEmail(dto.email)
    await this.getByUsername(dto.username)
  }

  async getById(id: number) {
    const user = await this.userRepository.findOneBy({ id })

    if (!user) {
      throw new NotFoundException(`User with id: "${id}" not found`)
    }

    return user
  }

  async getByEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email })

    if (!user) {
      throw new NotFoundException(`User with email: "${email}" not found`)
    }

    return user
  }

  async getByUsername(username: string) {
    const user = await this.userRepository.findOneBy({ username })

    if (!user) {
      throw new NotFoundException(`User with username: "${username}" not found`)
    }

    return user
  }

  async create(dto: CreateUserDto) {
    const hasUserByEmailOrUsername = await this.userRepository.findOne({
      where: [{ email: dto.email }, { username: dto.username }],
    })

    if (hasUserByEmailOrUsername) {
      throw new ConflictException(
        'User with the same email or username already exists'
      )
    }

    const newUser = this.userRepository.create()
    Object.assign(newUser, dto)

    const user = await this.userRepository.save(newUser)

    return user
  }

  async update(userId: number, dto: UpdateUserDto) {
    const hasUserByEmailOrUsername = await this.userRepository.findOne({
      where: [{ email: dto.email }, { username: dto.username }],
    })

    if (hasUserByEmailOrUsername) {
      throw new ConflictException(
        'User with the same email or username already exists'
      )
    }

    const user = await this.getById(userId)
    Object.assign(user, dto)

    const updatedUser = await this.userRepository.save(user)

    return updatedUser
  }

  buildUserResponse(user: UserEntity): User {
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    }
  }
}
