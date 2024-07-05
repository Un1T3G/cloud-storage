import { useSignUpMutation } from 'entities/session'
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { errorCatch, tokenService } from 'shared/api'
import * as yup from 'yup'

const initialValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not correct')
    .required('Email is required'),
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username has min 5 symbols'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is short - minimum 8 symbols'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})

export const useSignUpForm = () => {
  const router = useRouter()

  const { mutate } = useSignUpMutation({
    onError: (error) => toast.error(errorCatch(error)),
    onSuccess: ({ data }) => {
      tokenService.saveTokensToStorage(data.tokens)
      router.push('/')
      toast('Sign up successfully')
    },
  })

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      mutate({
        email: values.email,
        username: values.username,
        password: values.password,
      })
    },
  })

  return {
    values: formik.values,
    handleChange: formik.handleChange,
    errors: formik.errors,
    handleSubmit: formik.handleSubmit,
  }
}
