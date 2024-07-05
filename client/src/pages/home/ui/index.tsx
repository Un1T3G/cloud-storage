import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'
import { Files } from 'widgets/files-list'

export const HomePage: NextPageWithLayout = () => {
  return <Files />
}

HomePage.getLayout = (page) => <Layout title="Home">{page}</Layout>
