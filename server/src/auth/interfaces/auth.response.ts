import { AuthTokensResponse } from './auth.tokens.response'
import { User } from 'src/users/interfaces/user.interface'

export interface AuthResponse {
  user: User
  tokens: AuthTokensResponse
}
