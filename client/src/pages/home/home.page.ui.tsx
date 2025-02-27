import { Layout } from 'pages/layout/'
import { NextPageWithLayout } from 'shared/types'
import { FilesGrid } from 'widgets/files-grid'

export const HomePage: NextPageWithLayout = () => {
  return <FilesGrid />
}

HomePage.getLayout = (page) => <Layout title="Home">{page}</Layout>
