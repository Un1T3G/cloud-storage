import { useMutation } from '@tanstack/react-query'
import { auth } from 'shared/api'
import {
  IAuthResponse,
  IAuthSignInDto,
  IAuthSignUpDto,
  IAuthTokensResponse,
} from 'shared/api/types'

import { AxiosResponse } from 'axios'

const keys = {
  root: () => ['session'],
  signIn: () => [...keys.root(), 'signInUser'],
  signUp: () => [...keys.root(), 'signUpUser'],
}

interface IAuthMutationProps<T> {
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

export const useSignInMutation = (
  props?: IAuthMutationProps<AxiosResponse<IAuthResponse>>
) => {
  return useMutation<AxiosResponse<IAuthResponse>, Error, IAuthSignInDto>({
    mutationKey: keys.signIn(),
    mutationFn: (dto) => auth.signIn(dto) as any,
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}

export const useSignUpMutation = (
  props: IAuthMutationProps<AxiosResponse<IAuthResponse>>
) => {
  return useMutation<AxiosResponse<IAuthResponse>, Error, IAuthSignUpDto>({
    mutationKey: keys.signUp(),
    mutationFn: (dto) => auth.signIn(dto) as any,
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}

export const useGetTokensMutation = (
  props?: IAuthMutationProps<AxiosResponse<IAuthTokensResponse>>
) => {
  return useMutation<AxiosResponse<IAuthTokensResponse>, Error, string>({
    mutationKey: keys.signUp(),
    mutationFn: (refreshToken) => auth.getTokens(refreshToken) as any,
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}
