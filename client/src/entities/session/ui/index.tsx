import { PropsWithChildren, useRef } from 'react'
import { SessionStoreContext, createSessionStore } from '../model'
import { SessionStoreApi } from '../types'

export const SessionStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<SessionStoreApi>()

  if (!storeRef.current) {
    storeRef.current = createSessionStore()
  }

  return (
    <SessionStoreContext.Provider value={storeRef.current}>
      {children}
    </SessionStoreContext.Provider>
  )
}
