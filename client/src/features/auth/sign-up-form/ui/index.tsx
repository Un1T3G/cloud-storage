import { Button, Stack } from '@mui/joy'
import { useSignUpForm } from '../model'
import { PasswordField, TextFieldWithLabel } from 'shared/ui'
import { IoMdPerson } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

export const SignUpForm = () => {
  const { values, handleChange, errors, handleSubmit } = useSignUpForm()

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
