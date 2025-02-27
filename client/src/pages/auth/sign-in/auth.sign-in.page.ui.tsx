import { AuthSignInForm } from 'features/auth'
import { AuthLayout } from 'pages/auth/layout'
import { NextPageWithLayout } from 'shared/types'

export const AuthSignInPage: NextPageWithLayout = () => {
  return <AuthSignInForm />
}

AuthSignInPage.getLayout = (page) => (
  <AuthLayout title="Sign-in">{page}</AuthLayout>
)
