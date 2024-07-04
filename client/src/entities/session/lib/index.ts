import { useStore } from 'zustand'
import { SessionStoreContext } from '../model'
import { SessionState } from '../types'
import { useContext } from 'react'

export const useSessionStore = <T>(selector: (store: SessionState) => T): T => {
  const sessionStoreContext = useContext(SessionStoreContext)

  if (!sessionStoreContext) {
    throw new Error(`useSessionStore must be used within SessionStoreProvider`)
  }

  return useStore(sessionStoreContext, selector)
}

export const useUser = () => {
  return useSessionStore((state) => state.user)
}

export const useSetUser = () => {
  return useSessionStore((state) => state.setUser)
}
