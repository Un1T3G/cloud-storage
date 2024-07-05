import { fetchClassic } from '../config'

import {
  IAuthResponse,
  IAuthSignInDto,
  IAuthSignUpDto,
  IAuthTokensResponse,
} from './types'

export const signIn = (dto: IAuthSignInDto) => {
  return fetchClassic.post<IAuthResponse>('auth/sign-in', dto)
}

export const getTokens = (refreshToken: string) => {
  return fetchClassic.post<IAuthTokensResponse>('auth/refresh-token', {
    refreshToken,
  })
}

export const signUp = (dto: IAuthSignUpDto) => {
  return fetchClassic.post<IAuthResponse>('auth/sign-up', dto)
}
