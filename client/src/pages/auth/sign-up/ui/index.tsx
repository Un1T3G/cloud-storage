import { SignUpForm } from 'features/auth'
import { AuthLayout } from 'pages/auth/layout'
import { NextPageWithLayout } from 'shared/types'

export const SignUpPage: NextPageWithLayout = () => {
  return <SignUpForm />
}

SignUpPage.getLayout = (page) => <AuthLayout title="Sign-up">{page}</AuthLayout>
