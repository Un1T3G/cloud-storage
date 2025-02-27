import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import {
  IAuthResponse,
  IAuthSignInDto,
  IAuthSignUpDto,
  signIn,
  signUp,
} from 'shared/api'

const keys = {
  root: () => ['auth'],
  signIn: () => [...keys.root(), 'sign-in-user'],
  signUp: () => [...keys.root(), 'sign-up-user'],
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
    mutationFn: (dto) => signIn(dto) as any,
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}

export const useSignUpMutation = (
  props: IAuthMutationProps<AxiosResponse<IAuthResponse>>
) => {
  return useMutation<AxiosResponse<IAuthResponse>, Error, IAuthSignUpDto>({
    mutationKey: keys.signUp(),
    mutationFn: (dto) => signUp(dto) as any,
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}
