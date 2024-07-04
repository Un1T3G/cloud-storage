import ky from 'ky'
import { getAccessToken, getRefreshToken } from './lib'
import { getTokens } from './auth'

export const fetchClassic = ky.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers':
      'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
    'Content-Type': 'application/json',
  },
  prefixUrl: `${process.env.SERVER_URL}/api/`,
})

export const fetchWithAuth = fetchClassic.extend({
  hooks: {
    beforeRequest: [
      (request) => {
        const token = getAccessToken()
        request.headers.set('Authorization', `Bearer ${token}`)
      },
    ],
    afterResponse: [
      async (input, options, response) => {
        const refreshToken = getRefreshToken()

        if (response.status === 403 && refreshToken) {
          const { accessToken } = await getTokens(refreshToken)

          input.headers.set('Authorization', `Bearer ${accessToken}`)

          return ky(input, options)
        }
      },
    ],
  },
})
