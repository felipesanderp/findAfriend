import { InputHTMLAttributes } from 'react'
import { Label, InputComponent } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  value: string
  label: string
}

export function Input({ type, value, label, ...rest }: InputProps) {
  return (
    <div>
      <Label>{label}</Label>
      <InputComponent type={type} value={value} {...rest} />
    </div>
  )
}
