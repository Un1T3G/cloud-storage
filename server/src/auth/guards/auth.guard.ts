import { AuthGuard as NestPassportAuthGuard } from '@nestjs/passport'

export class AuthGuard extends NestPassportAuthGuard('jwt') {}
