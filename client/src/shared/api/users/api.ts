import { fetchWithAuth } from '../config'
import { IUser, IUserUpdateDto } from './types'

export const getProfile = () => {
  return fetchWithAuth.get('users/profile').json<IUser>()
}

export const updateProfile = (dto: IUserUpdateDto) => {
  return fetchWithAuth.put('users/profile', { json: dto }).json<IUser>()
}
