import styled from 'styled-components'

export const Container = styled.div`
  @media ${(props) => props.theme.media.aboveDesktop} {
    display: grid;
    grid-template-columns: 392px 1fr;
    height: 100vh;
  }
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`

export const AsideHeader = styled.header`
  background-color: ${(props) => props.theme.colors['red-500']};
  padding: 81px 40px 27px 56px;
`

export const AsideBody = styled.div`
  background-color: ${(props) => props.theme.colors['red-300']};
  height: 100%;
  padding: 35px 56px 40px 56px;
`
