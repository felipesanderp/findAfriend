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

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors['red-100']};
  padding: 32px 50px;
`

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 63px;
  margin-top: 60px;

  > p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['blue-500']};

    > span {
      font-weight: 800;
    }
  }
`

export const SelectContainer = styled.div`
  width: 210px;
`

export const ContainerCards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: '1fr 1fr';
  gap: 16px;

  @media ${(props) => props.theme.media.aboveTablet} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 280px));
    gap: 32px;
  }
`
