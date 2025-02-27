import { fetchWithAuth } from '../api.config'
import { IUser, IUserUpdateDto } from './users.types'

export const getProfile = () => {
  return fetchWithAuth.get<IUser>('users/profile')
}

export const updateProfile = (dto: IUserUpdateDto) => {
  return fetchWithAuth.put<IUser>('users/profile', dto)
}
