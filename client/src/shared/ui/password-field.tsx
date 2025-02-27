import { Button } from '@mui/joy'
import { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import { IoMdEyeOff } from 'react-icons/io'
import { IoEye } from 'react-icons/io5'
import { TextFieldWithLabel } from './text-field-with-label'

type TextFieldProps = Parameters<typeof TextFieldWithLabel>[0]

interface IProps
  extends Pick<
    TextFieldProps,
    'name' | 'label' | 'error' | 'value' | 'handleChange' | 'placeholder'
  > {}

export const PasswordField = (props: IProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const toggle = () => setShowPassword((prev) => !prev)

  const Icon = showPassword ? IoEye : IoMdEyeOff

  return (
    <TextFieldWithLabel
      {...props}
      type={showPassword ? 'text' : 'password'}
      startDecorator={<FaLock />}
      endDecorator={
        <Button onClick={toggle} variant="soft" color="neutral" sx={{ p: 1 }}>
          <Icon />
        </Button>
      }
    />
  )
}
