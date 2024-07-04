import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '../constants'
import { IAuthTokensResponse } from '../types'
import Cookies from 'js-cookie'

export const saveTokensToStorage = (tokens: IAuthTokensResponse) => {
  Cookies.set(ACCESS_TOKEN_KEY, tokens.accessToken)
  Cookies.set(REFRESH_TOKEN_KEY, tokens.refreshToken)
}

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY)
}

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_KEY)
}

export const removeTokensFromStorage = () => {
  Cookies.remove(ACCESS_TOKEN_KEY)
  Cookies.remove(REFRESH_TOKEN_KEY)
}
