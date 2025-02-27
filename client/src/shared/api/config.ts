import axios from 'axios'

import { auth, errorCatch, tokenService } from '.'

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    'Content-Type': 'application/json',
  },
  baseURL: `${process.env.SERVER_URL}/api/`,
}

export const fetchClassic = axios.create(options)

export const fetchWithAuth = axios.create(options)

fetchWithAuth.interceptors.request.use((config) => {
  const accessToken = tokenService.getAccessToken()

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
})

fetchWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const refreshToken = tokenService.getRefreshToken()!
        await auth.getTokens(refreshToken)

        return fetchWithAuth.request(originalRequest)
      } catch (e: any) {
        if (e.response && errorCatch(e) === 'jwt expired') {
          tokenService.removeTokensFromStorage()
        }
      }
    }

    throw error
  }
)
