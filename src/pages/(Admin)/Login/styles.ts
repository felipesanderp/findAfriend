import { styled } from 'styled-components'

export const LoginContainer = styled.div`
  max-width: 1112px;
  padding: 32px;
  margin: 0 auto;

  @media ${(props) => props.theme.media.aboveDesktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 140px;
    padding-block: 80px;
    height: 100vh;
    align-items: center;
  }
`
export const Banner = styled.div`
  background-color: ${(props) => props.theme.colors['red-300']};
  border-radius: 20px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 32px;
  margin-bottom: 32px;
  gap: 32px;
  max-height: 661px;

  @media ${(props) => props.theme.media.aboveDesktop} {
    padding: 50px 52px 39px 52px;
  }

  @media ${(props) => props.theme.media.aboveDesktopXl} {
    padding: 107px 52px 39px 52px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    font-size: 1.5rem;
    font-weight: 600;

    color: ${(props) => props.theme.colors.white};
  }
`
export const Content = styled.div``

export const Title = styled.h2`
  font-size: 52px;
  margin-bottom: 102px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
