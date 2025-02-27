import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { SessionState } from './session.types'

export const useSessionStore = create<SessionState>()(
  persist(
    (set) => ({
      isAuth: false,
      setIsAuth: (isAuth) => set({ isAuth }),
    }),
    {
      name: 'session',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
