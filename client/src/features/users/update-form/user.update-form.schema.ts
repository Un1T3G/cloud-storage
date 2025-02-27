import * as yup from 'yup'

export const userUpdateFormSchema = yup.object().shape({
  email: yup.string().email('Email is not correct'),
  username: yup.string().required('Username is required'),
})
