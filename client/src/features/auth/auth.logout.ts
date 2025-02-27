import { useSessionStore } from 'entities/session'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { tokenService } from 'shared/api'

export const useAuthLogout = () => {
  const router = useRouter()
  const setIsAuth = useSessionStore((state) => state.setIsAuth)

  const logout = useCallback(() => {
    setIsAuth(false)
    tokenService.removeTokensFromStorage()
    router.push('/auth/sign-in')
    toast.success('Logout successfully')
  }, [])

  return logout
}
