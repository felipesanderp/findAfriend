import styled, { css } from 'styled-components'
import { darken } from 'polished'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary'
}

const buttonVariants = {
  primary: css`
    background-color: ${(props) => props.theme.colors['blue-500']};
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${darken(0.05, '#0D3B66')};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors['blue-200']};
    color: ${(props) => props.theme.colors['blue-500']};

    &:hover {
      background-color: ${darken(0.05, '#F5F8FA')};
    }
  `,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: none;
  border-radius: 20px;
  padding: 14px;
  height: 72px;
  font-weight: 700;
  font-size: 20px;

  cursor: pointer;

  transition: background 0.2s linear;

  display: flex;
  align-items: center;
  justify-content: center;

  &.firstButton {
    margin-top: 40px;
  }

  ${(props) => buttonVariants[props.variant || 'primary']}
`
