import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import {
  IUser,
  IUserUpdateDto,
  getProfile,
  updateProfile,
} from 'shared/api/users'

const keys = {
  root: () => ['user'],
  profile: () => [...keys.root(), 'profile'],
  updateProfile: () => [...keys.profile(), 'update'],
}

export const useUserProfile = () => {
  return useQuery({
    queryKey: keys.profile(),
    queryFn: getProfile,
  })
}

interface IUserUpdateMutationProps {
  onError?: (error?: Error | null) => void
  onSuccess?: (data: AxiosResponse<IUser, any>) => void
}

export const useUserUpdateMutation = (props?: IUserUpdateMutationProps) => {
  return useMutation({
    mutationKey: keys.updateProfile(),
    mutationFn: (dto: IUserUpdateDto) => updateProfile(dto),
    onSuccess: props?.onSuccess,
    onError: props?.onError,
  })
}
