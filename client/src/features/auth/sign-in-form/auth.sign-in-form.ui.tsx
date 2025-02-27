import { Button, Stack } from '@mui/joy'
import { useSignInMutation } from 'entities/auth'
import { useSessionStore } from 'entities/session'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { MdEmail } from 'react-icons/md'
import { tokenService } from 'shared/api'
import { errorCatch } from 'shared/api/api.lib'
import { PasswordField, TextFieldWithLabel } from 'shared/ui'
import { authSignInFormSchema } from './auth.sign-in-form.schema'

const initialValues = {
  email: '',
  password: '',
}

export const AuthSignInForm = () => {
  const router = useRouter()
  const setIsAuth = useSessionStore((state) => state.setIsAuth)

  const { mutate } = useSignInMutation({
    onError: (error) => toast.error(errorCatch(error)),
    onSuccess: ({ data }) => {
      setIsAuth(true)
      tokenService.saveTokensToStorage(data.tokens)
      router.push('/')
      toast.success('Sign in successfully')
    },
  })

  const formik = useFormik({
    initialValues,
    validationSchema: authSignInFormSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  })

  const { handleSubmit, values, handleChange, errors } = formik

  return (
    <form onSubmit={handleSubmit}>
      <Stack rowGap={1} mb={2}>
        <TextFieldWithLabel
          label="Email"
          name="email"
          value={values.email}
          error={errors.email}
          placeholder="Email..."
          handleChange={handleChange}
          startDecorator={<MdEmail />}
        />
        <PasswordField
          label="Password"
          name="password"
          value={values.password}
          error={errors.password}
          handleChange={handleChange}
          placeholder="Password..."
        />
      </Stack>
      <Button sx={{ width: '100%' }} type="submit">
        Sign in
      </Button>
    </form>
  )
}
