import { Layout } from 'pages/layout/'
import { NextPageWithLayout } from 'shared/types'
import { FilesGrid } from 'widgets/files-grid'

export const PhotosPage: NextPageWithLayout = () => {
  return <FilesGrid type="photos" />
}

PhotosPage.getLayout = (page) => <Layout title="Photos">{page}</Layout>
