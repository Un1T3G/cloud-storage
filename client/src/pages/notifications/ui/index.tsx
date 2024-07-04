import { Layout } from 'pages/layout'
import { NextPageWithLayout } from 'shared/types'

export const NotificationsPage: NextPageWithLayout = () => {
  return <></>
}

NotificationsPage.getLayout = (page) => (
  <Layout title="Notifications">{page}</Layout>
)
