import { fetchClassic } from '../config'
import { saveTokensToStorage } from '../lib'

import {
  IAuthResponse,
  IAuthSignInDto,
  IAuthSignUpDto,
  IAuthTokensResponse,
} from './types'

const writeTokensToStorage = async (_: any, __: any, response: Response) => {
  const { tokens } = (await response.clone().json()) as IAuthResponse

  saveTokensToStorage(tokens)

  return response
}

export const signIn = (dto: IAuthSignInDto) => {
  return fetchClassic
    .post('auth/sign-in', {
      json: dto,
      hooks: {
        afterResponse: [writeTokensToStorage],
      },
    })
    .json<IAuthResponse>()
}

export const getTokens = (refreshToken: string) => {
  return fetchClassic
    .post('auth/refresh-token', {
      json: {
        refreshToken,
      },
      hooks: {
        afterResponse: [writeTokensToStorage],
      },
    })
    .json<IAuthTokensResponse>()
}

export const signUp = (dto: IAuthSignUpDto) => {
  return fetchClassic
    .post('auth/sign-up', {
      json: dto,
      hooks: {
        afterResponse: [writeTokensToStorage],
      },
    })
    .json<IAuthResponse>()
}
