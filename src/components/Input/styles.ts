import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors['blue-500']};
`

export const InputComponent = styled.input`
  appearance: none;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors['blue-300']};
  background-color: ${(props) => props.theme.colors['blue-200']};
  color: ${(props) => props.theme.colors['blue-500']};
  padding: 18px;
  width: 100%;
  font-weight: 700;

  &::placeholder {
    color: inherit;
    font-weight: 600;
  }
`
