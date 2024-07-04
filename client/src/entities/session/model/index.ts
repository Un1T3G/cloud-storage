import { createContext } from 'react'

import { StateCreator, createStore } from 'zustand'
import { PersistOptions, persist } from 'zustand/middleware'
import { SessionState, SessionStoreApi } from '../types'

const createSessionSlice: StateCreator<SessionState> = (set) => ({
  user: null,
  setUser: (user) => set({ user }, false),
})

const persistOptions: PersistOptions<SessionState> = { name: 'session' }

export const createSessionStore = () =>
  createStore<SessionState>()(persist(createSessionSlice, persistOptions))

export const SessionStoreContext = createContext<SessionStoreApi | undefined>(
  undefined
)
