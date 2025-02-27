import * as yup from 'yup'

export const authSignInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not correct')
    .required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is short - minimum 8 symbols'),
})
