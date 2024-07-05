import { PropsWithChildren } from 'react'

import { CacheProvider } from './cache'
import { ThemeProvider } from './theme'
import { ReactQueryProvider } from './react-query'
import { SessionStoreProvider } from 'entities/session'
import { ToastProvider } from './toast'

export const Providers = ({
  children,
  pageProps,
}: PropsWithChildren<{ pageProps: any }>) => {
  return (
    <ReactQueryProvider>
      <SessionStoreProvider>
        <CacheProvider pageProps={pageProps}>
          <ThemeProvider>
            <ToastProvider>{children}</ToastProvider>
          </ThemeProvider>
        </CacheProvider>
      </SessionStoreProvider>
    </ReactQueryProvider>
  )
}
