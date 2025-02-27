import { Layout } from 'pages/layout/'
import { NextPageWithLayout } from 'shared/types'

export const NotificationsPage: NextPageWithLayout = () => {
  return <>TODO: Make file request permission</>
}

NotificationsPage.getLayout = (page) => (
  <Layout title="Notifications">{page}</Layout>
)
