import { useUserUpdateMutation } from 'features/user/queries'
import { useFormik } from 'formik'
import * as yup from 'yup'

const initialValues = {
  email: '',
  username: '',
}

const schema = yup.object().shape({
  email: yup.string().email('Email is not correct'),
  username: yup.string().required('Username is required'),
})

export const useUserUpdateForm = () => {
  const { mutate } = useUserUpdateMutation()

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      mutate(values)
    },
  })

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    errors: formik.errors,
    handleSubmit: formik.handleSubmit,
  }
}
