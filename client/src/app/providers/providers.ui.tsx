import { PropsWithChildren } from 'react'

import { CacheProvider } from './cache.provider'
import { ReactQueryProvider } from './react-query.provider'
import { SessionProvider } from './session.provider'
import { ThemeProvider } from './theme.provider'
import { ToastProvider } from './toast.provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <CacheProvider>
        <ThemeProvider>
          <ToastProvider>
            <SessionProvider>{children}</SessionProvider>
          </ToastProvider>
        </ThemeProvider>
      </CacheProvider>
    </ReactQueryProvider>
  )
}
