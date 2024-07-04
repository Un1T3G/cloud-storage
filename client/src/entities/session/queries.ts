import { useMutation, useQuery } from '@tanstack/react-query'
import { auth, removeTokensFromStorage, users } from 'shared/api'
import {
  IAuthResponse,
  IAuthSignInDto,
  IAuthSignUpDto,
  IAuthTokensResponse,
} from 'shared/api/types'

import { useCallback } from 'react'
import { useSessionStore, useSetUser, useUser } from './lib'

const keys = {
  root: () => ['session'],
  current: () => [...keys.root(), 'currentUser'],
  signIn: () => [...keys.root(), 'signInUser'],
  signUp: () => [...keys.root(), 'signUpUser'],
}

interface IAuthMutationProps {
  onSuccess?: (data: IAuthResponse) => void
  onError?: (error: Error) => void
}

export const useSignInMutation = ({
  onError,
  onSuccess,
}: IAuthMutationProps) => {
  const setUser = useSetUser()

  return useMutation<IAuthResponse, Error, IAuthSignInDto>({
    mutationKey: keys.signIn(),
    mutationFn: (dto) => auth.signIn(dto) as any,
    onSuccess: (data) => {
      setUser(data.user)
      if (onSuccess) onSuccess(data)
    },
    onError,
  })
}

export const useSignUpMutation = ({
  onError,
  onSuccess,
}: IAuthMutationProps) => {
  const setUser = useSetUser()

  return useMutation<IAuthResponse, Error, IAuthSignUpDto>({
    mutationKey: keys.signUp(),
    mutationFn: (dto) => auth.signIn(dto) as any,
    onSuccess: (data) => {
      setUser(data.user)
      if (onSuccess) onSuccess(data)
    },
    onError,
  })
}

export const useLogout = () => {
  const setUser = useSetUser()

  const logout = useCallback(() => {
    removeTokensFromStorage()
    setUser(null)
  }, [setUser])

  return {
    logout,
  }
}

export const useGetTokensMutation = () => {
  return useMutation<IAuthTokensResponse, Error, string>({
    mutationKey: keys.signUp(),
    mutationFn: (refreshToken) => auth.getTokens(refreshToken) as any,
  })
}

export const useGetProfile = () => {
  const user = useUser()

  return useQuery({
    queryFn: () => users.getProfile(),
    initialData: user,
    queryKey: keys.current(),
  })
}
