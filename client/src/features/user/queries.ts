import { useMutation, useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { useSetUser, useUser } from 'entities/session'
import { users } from 'shared/api'
import { IUser, IUserUpdateDto } from 'shared/api/types'

const keys = {
  root: () => ['users'],
  profile: () => [...keys.root(), 'profileUser'],
  update: () => [...keys.root(), 'updateUser'],
}

interface IUserUpdateMutationProps {
  onError?: (error: Error) => void
  onSuccess?: (data: IUser) => void
}

export const useGetProfile = () => {
  const user = useUser()

  return useQuery({
    queryFn: () => users.getProfile().then((x) => x.data),
    initialData: user,
    queryKey: keys.profile(),
  })
}

export const useUserUpdateMutation = (props?: IUserUpdateMutationProps) => {
  const setUser = useSetUser()

  return useMutation<AxiosResponse<IUser>, Error, IUserUpdateDto>({
    mutationKey: keys.update(),
    mutationFn: (dto) => users.updateProfile(dto),
    onSuccess: ({ data }) => {
      setUser(data)
      if (props?.onSuccess) props?.onSuccess(data)
    },
    onError: props?.onError,
  })
}
