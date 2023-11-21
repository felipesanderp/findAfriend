import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 3px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors['blue-500']};

    span {
      color: ${(props) => props.theme.colors.white};
    }
  }

  & img {
    width: 100%;
  }
`

export const Header = styled.header``

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0 17px 0;
`

export const Label = styled.span`
  color: ${(props) => props.theme.colors['blue-500']};
  font-weight: 700;
  transition: color 0.5s ease;
`
