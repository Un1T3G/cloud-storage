import { Button, Stack, styled } from '@mui/joy'
import { useUserUpdateForm } from '../model'
import { TextFieldWithLabel } from 'shared/ui'
import { IoMdPerson } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

export const UserUpdateForm = () => {
  const { values, errors, handleChange, handleSubmit } = useUserUpdateForm()

  return (
    <Root onSubmit={handleSubmit}>
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
        <TextFieldWithLabel
          label="Username"
          name="username"
          value={values.username}
          error={errors.username}
          placeholder="Username..."
          handleChange={handleChange}
          startDecorator={<IoMdPerson />}
        />
      </Stack>
      <Button sx={{ width: '100%' }} type="submit">
        Update
      </Button>
    </Root>
  )
}

const Root = styled('form')({})
