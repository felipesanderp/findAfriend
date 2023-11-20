import { styled } from 'styled-components'

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors['red-500']};
`

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 100vh;
  display: grid;

  @media ${(props) => props.theme.media.aboveDesktop} {
    grid-template-rows: 1fr auto 1fr;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    font-size: 1.5rem;
    font-weight: 600;

    color: ${(props) => props.theme.colors.white};
  }
`
export const ContentHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.media.aboveDesktop} {
    justify-content: space-between;
    flex-direction: row;
  }
`

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.white};

  font-size: 3.25rem;
  margin-bottom: 2rem;
  line-height: 90%;
  max-width: 487px;

  @media ${(props) => props.theme.media.aboveDesktop} {
    margin: 0;
    font-size: 4.5rem;
    max-width: 487px;
  }
`
export const Footer = styled.footer`
  @media ${(props) => props.theme.media.aboveDesktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
`
export const Subtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  max-width: 407px;
  color: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.media.aboveDesktop} {
    font-size: 1.5rem;
  }
`

export const SearchContainer = styled.div`
  color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media ${(props) => props.theme.media.aboveDesktop} {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    span {
      gap: 1.5rem;
    }
  }
`

export const UFSelectContainer = styled.div`
  @media ${(props) => props.theme.media.aboveDesktop} {
    max-width: 4.5rem;
    margin-right: 0.625rem;
  }
`
export const StateSelectContainer = styled.div`
  @media ${(props) => props.theme.media.aboveDesktop} {
    width: 280px;
    margin-right: 32px;
  }
`
