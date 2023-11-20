import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  variant: 'primary' | 'secondary'
}

export function Button({ title, variant, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {title}
    </ButtonContainer>
  )
}
