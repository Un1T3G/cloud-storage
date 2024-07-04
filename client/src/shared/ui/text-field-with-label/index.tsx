import { FormControl, FormHelperText, FormLabel, Input } from '@mui/joy'
import { ChangeEvent, ReactNode } from 'react'

interface IProps {
  name: string
  label: string
  value: string
  type?: string
  placeholder?: string
  handleChange: (e: ChangeEvent<any>) => void
  error?: string
  startDecorator?: ReactNode
  endDecorator?: ReactNode
}

export const TextFieldWithLabel = ({
  name,
  label,
  value,
  type,
  placeholder,
  handleChange,
  error,
  startDecorator,
  endDecorator,
}: IProps) => {
  return (
    <FormControl error={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        startDecorator={startDecorator}
        endDecorator={endDecorator}
      />
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
