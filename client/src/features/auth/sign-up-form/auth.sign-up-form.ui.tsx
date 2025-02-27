import { Button, Stack } from '@mui/joy'
import { useSignUpMutation } from 'entities/auth'
import { useSessionStore } from 'entities/session'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { IoMdPerson } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { tokenService } from 'shared/api'
import { errorCatch } from 'shared/api/api.lib'
import { PasswordField, TextFieldWithLabel } from 'shared/ui'
import { authSignUpFormSchema } from './auth.sign-up-form.schema'

const initialValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

export const AuthSignUpForm = () => {
  const router = useRouter()
  const setIsAuth = useSessionStore((state) => state.setIsAuth)

  const { mutate } = useSignUpMutation({
    onError: (error) => toast.error(errorCatch(error)),
    onSuccess: ({ data }) => {
      setIsAuth(true)
      tokenService.saveTokensToStorage(data.tokens)
      router.push('/')
      toast('Sign up successfully')
    },
  })

  const formik = useFormik({
    initialValues,
    validationSchema: authSignUpFormSchema,
    onSubmit: (values) => {
      mutate({
        email: values.email,
        username: values.username,
        password: values.password,
      })
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
          startDecorator={<IoMdPerson />}
        />
        <TextFieldWithLabel
          label="Username"
          name="username"
          value={values.username}
          error={errors.username}
          placeholder="Username..."
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
        <PasswordField
          label="Confirm password"
          name="confirmPassword"
          value={values.confirmPassword}
          error={errors.confirmPassword}
          handleChange={handleChange}
          placeholder="Confirm password..."
        />
      </Stack>
      <Button sx={{ width: '100%' }} type="submit">
        Sign up
      </Button>
    </form>
  )
}
