import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'

export const PhotosPage: NextPageWithLayout = () => {
  return <></>
}

PhotosPage.getLayout = (page) => <Layout title="Photos">{page}</Layout>
