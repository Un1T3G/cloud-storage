import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserEntity } from '../entities/user.entity'

type TypeData = keyof UserEntity

export const User = createParamDecorator(
  (data: TypeData, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    const user = request.user

    return data ? user?.[data] : user
  }
)
