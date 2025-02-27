import * as yup from 'yup'

export const authSignUpFormSchema = yup.object().shape({
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
