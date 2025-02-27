import { AuthSignUpForm } from 'features/auth'
import { AuthLayout } from 'pages/auth/layout'
import { NextPageWithLayout } from 'shared/types'

export const AuthSignUpPage: NextPageWithLayout = () => {
  return <AuthSignUpForm />
}

AuthSignUpPage.getLayout = (page) => (
  <AuthLayout title="Sign-up">{page}</AuthLayout>
)
