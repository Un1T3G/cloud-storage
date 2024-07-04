export interface IUser {
  id: number
  email: string
  username: string
  createdAt: string
  updateAt: string
}

export interface IUserUpdateDto {
  email?: string
  username?: string
}
