import { IUser } from 'shared/api/types'
import { createSessionStore } from './model'

type State = {
  user: IUser | null
}

type Actions = {
  setUser: (user: IUser | null) => void
}

export type SessionState = State & Actions

export type SessionStoreApi = ReturnType<typeof createSessionStore>
