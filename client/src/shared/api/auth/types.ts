import { IUser } from '../users/types'

export interface IAuthResponse {
  user: IUser
  tokens: IAuthTokensResponse
}

export interface IAuthTokensResponse {
  refreshToken: string
  accessToken: string
}

export interface IAuthSignInDto {
  email: string
  password: string
}

export interface IAuthSignUpDto extends IAuthSignInDto {
  username: string
}
