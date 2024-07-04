import { useSignInMutation } from 'entities/session'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import * as yup from 'yup'

const initialValues = {
  email: '',
  password: '',
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not correct')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is short - minimum 8 symbols'),
})

export const useSignInForm = () => {
  const router = useRouter()

  const { mutate } = useSignInMutation({
    onError: (error) => console.log('Sign-in error', error),
    onSuccess: () => router.push('/'),
  })

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
