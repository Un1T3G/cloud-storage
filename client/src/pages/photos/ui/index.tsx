import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'
import { Files } from 'widgets/files-list'

export const PhotosPage: NextPageWithLayout = () => {
  return <Files type="photos" />
}

PhotosPage.getLayout = (page) => <Layout title="Photos">{page}</Layout>
