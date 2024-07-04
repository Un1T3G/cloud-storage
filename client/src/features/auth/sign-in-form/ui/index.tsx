import { Button, Stack } from '@mui/joy'
import { useSignInForm } from '../model'
import { PasswordField, TextFieldWithLabel } from 'shared/ui'
import { MdEmail } from 'react-icons/md'

export const SignInForm = () => {
  const { values, handleChange, errors, handleSubmit } = useSignInForm()

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
