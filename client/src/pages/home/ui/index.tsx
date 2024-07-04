import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'

export const HomePage: NextPageWithLayout = () => {
  return <>Home Page</>
}

HomePage.getLayout = (page) => <Layout title="Home">{page}</Layout>
