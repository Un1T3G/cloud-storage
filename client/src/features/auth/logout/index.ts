import { useRouter } from 'next/router'
import { useCallback } from 'react'
import toast from 'react-hot-toast'
import { tokenService } from 'shared/api'

export const useLogout = () => {
  const router = useRouter()

  const logout = useCallback(() => {
    tokenService.removeTokensFromStorage()
    router.push('/auth/sign-in')
    toast.success('Logout successfully')
  }, [])

  return {
    logout,
  }
}
