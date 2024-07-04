import { Providers } from './providers'

import { NoSSR } from 'shared/lib'
import './styles/index.css'
import { AppPropsWithLayout } from 'shared/types'
import { NextSeo } from 'next-seo'

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <NextSeo nofollow noindex title="Cloud storage" />
      <Providers pageProps={pageProps}>
        <NoSSR>{getLayout(<Component {...pageProps} />)}</NoSSR>
      </Providers>
    </>
  )
}
