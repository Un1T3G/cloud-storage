import Cookies from 'js-cookie'
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './constants'
import { IAuthTokensResponse } from './types'

class TokenService {
  getAccessToken() {
    return Cookies.get(ACCESS_TOKEN_KEY)
  }

  getRefreshToken() {
    return Cookies.get(REFRESH_TOKEN_KEY)
  }

  saveTokensToStorage(tokens: IAuthTokensResponse) {
    Cookies.set(ACCESS_TOKEN_KEY, tokens.accessToken)
    Cookies.set(REFRESH_TOKEN_KEY, tokens.refreshToken)
  }

  removeTokensFromStorage() {
    Cookies.remove(ACCESS_TOKEN_KEY)
    Cookies.remove(REFRESH_TOKEN_KEY)
  }
}

export const tokenService = new TokenService()
