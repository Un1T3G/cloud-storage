import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'

export const TrashPage: NextPageWithLayout = () => {
  return <></>
}

TrashPage.getLayout = (page) => <Layout title="Trash">{page}</Layout>
