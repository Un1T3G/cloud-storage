import { Button, Stack } from '@mui/joy'
import { useUserUpdateMutation } from 'entities/users'
import { useFormik } from 'formik'
import { IoMdPerson } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { TextFieldWithLabel } from 'shared/ui'
import { userUpdateFormSchema } from './user.update-form.schema'

const initialValues = {
  email: '',
  username: '',
}

export const UserUpdateForm = () => {
  const { mutate } = useUserUpdateMutation()

  const formik = useFormik({
    initialValues,
    validationSchema: userUpdateFormSchema,
    onSubmit: (values) => {
      mutate(values)
    },
  })

  const { handleSubmit, values, errors, handleChange } = formik

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
    </form>
  )
}
