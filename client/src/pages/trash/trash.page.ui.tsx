import { Layout } from 'pages/layout/'
import { NextPageWithLayout } from 'shared/types'
import { FilesGrid } from 'widgets/files-grid'

export const TrashPage: NextPageWithLayout = () => {
  return <FilesGrid type="trash" />
}

TrashPage.getLayout = (page) => <Layout title="Trash">{page}</Layout>
