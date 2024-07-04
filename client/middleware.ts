import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { REFRESH_TOKEN_KEY } from 'shared/api'

const redirectToAuth = (request: NextRequest) => {
  return NextResponse.redirect(new URL('/auth/sign-in', request.url))
}

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get(REFRESH_TOKEN_KEY)

  if (!refreshToken) {
    return redirectToAuth(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/photos', '/trash', '/profile', '/notifications'],
}
