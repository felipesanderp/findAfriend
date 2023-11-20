import { styled, css } from 'styled-components'

interface SelectContainerProps {
  isOutlined?: boolean
}

export const SelectContainer = styled.select<SelectContainerProps>`
  width: 100%;
  padding: 14px;
  border-radius: 20px;
  border: none;
  background-color: ${(props) => props.theme.colors['red-100']};
  color: ${(props) => props.theme.colors.white};
  height: 60px;
  font-weight: 800;

  ${(props) =>
    props.isOutlined &&
    css`
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colors.white};
    `}
`

export const Option = styled.option`
  background: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors['blue-300']};
`
