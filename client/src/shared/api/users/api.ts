import { fetchWithAuth } from '../config'
import { IUser, IUserUpdateDto } from './types'

export const getProfile = () => {
  return fetchWithAuth.get<IUser>('users/profile')
}

export const updateProfile = (dto: IUserUpdateDto) => {
  return fetchWithAuth.put<IUser>('users/profile', { json: dto })
}
