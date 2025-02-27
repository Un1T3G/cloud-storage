import { Providers } from './providers/'

import { NextSeo } from 'next-seo'
import { NoSSR } from 'shared/lib'
import { AppPropsWithLayout } from 'shared/types'
import './styles/index.css'

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <NextSeo nofollow noindex title="Cloud storage" />
      <Providers>
        <NoSSR>{getLayout(<Component {...pageProps} />)}</NoSSR>
      </Providers>
    </>
  )
}
