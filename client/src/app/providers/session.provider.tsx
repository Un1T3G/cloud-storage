import { useHydrationZustand } from '@codebayu/use-hydration-zustand'
import { useSessionStore } from 'entities/session'
import { useUserProfile } from 'entities/users'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'
import toast from 'react-hot-toast'
import { AuthEvents } from 'shared/api'

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const { isAuth, setIsAuth } = useSessionStore()
  const router = useRouter()
  const sessionStoreHydrated = useHydrationZustand(useSessionStore)
  const { isError } = useUserProfile()

  useEffect(() => {
    const onTokenRefreshed = () => {
      toast.success('Token refreshed successfully')
    }

    const onTokenExpired = () => {
      toast.error('Token expired')
      setIsAuth(false)
    }

    document.addEventListener(AuthEvents.TOKEN_REFRESHED.type, onTokenRefreshed)
    document.addEventListener(AuthEvents.TOKEN_EXPIRED.type, onTokenExpired)

    return () => {
      document.removeEventListener(
        AuthEvents.TOKEN_REFRESHED.type,
        onTokenRefreshed
      )
      document.removeEventListener(
        AuthEvents.TOKEN_EXPIRED.type,
        onTokenExpired
      )
    }
  }, [])

  useEffect(() => {
    const isNotAuthPage = () => {
      return router.asPath.includes('auth') === false
    }

    if (!isAuth && sessionStoreHydrated && isNotAuthPage()) {
      router.push('/auth/sign-in')
    } else if (isAuth && isError) {
      setIsAuth(false)

      if (isNotAuthPage()) {
        router.push('/auth/sign-in')
        console.log('lol')
      }
    }
  }, [router.asPath, isError, isAuth, sessionStoreHydrated])

  return children
}
