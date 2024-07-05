import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'
import { Files } from 'widgets/files-list'

export const TrashPage: NextPageWithLayout = () => {
  return <Files type="trash" />
}

TrashPage.getLayout = (page) => <Layout title="Trash">{page}</Layout>
