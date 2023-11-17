import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  padding-left: 15rem;

  grid-template-columns: 500px 1fr;

  background-color: ${(props) => props.theme['red-500']};
`

export const LogoContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-items: center;

  h1 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 5rem;

    color: ${(props) => props.theme.white};
  }

  span {
    font-size: 1.5rem;
    font-weight: 600;

    color: ${(props) => props.theme.white};
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 5rem;

  h2 {
    color: ${(props) => props.theme.white};
  }
`
