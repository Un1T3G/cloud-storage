import { SignInForm } from 'features/auth'
import { AuthLayout } from 'pages/auth/layout'
import { NextPageWithLayout } from 'shared/types'

export const SignInPage: NextPageWithLayout = () => {
  return <SignInForm />
}

SignInPage.getLayout = (page) => <AuthLayout title="Sign-in">{page}</AuthLayout>
