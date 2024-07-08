import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { REFRESH_TOKEN_KEY } from './src/shared/api'

const redirectToAuth = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/auth/sign-in', request.url))
}

const appendHeadersConfigToRequest = (request: NextRequest) => {
  const options = [
    {
      key: 'Access-Control-Allow-Credentials',
      value: 'true',
    },
    {
      key: 'Access-Control-Allow-Origin',
      value: '*',
    },
    {
      key: 'Access-Control-Allow-Methods',
      value: 'GET,DELETE,PATCH,POST,PUT',
    },
    {
      key: 'Access-Control-Allow-Headers',
      value:
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    },
  ]

  options.forEach(({ key, value }) => request.headers.append(key, value))
}

export function middleware(request: NextRequest) {
  appendHeadersConfigToRequest(request)

  const refreshToken = request.cookies.get(REFRESH_TOKEN_KEY)

  if (!refreshToken) {
    return redirectToAuth(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/photos', '/trash', '/profile', '/notifications'],
}
