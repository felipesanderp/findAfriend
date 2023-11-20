import {
  Page,
  HomeContainer,
  LogoContainer,
  ContentHeading,
  Heading,
  Footer,
  Subtitle,
  SearchContainer,
} from './styles'

import logoImg from '../../assets/logo-findafriend.svg'
import petsImg from '../../assets/pets.svg'

export function Home() {
  return (
    <Page>
      <HomeContainer>
        <LogoContainer>
          <img src={logoImg} alt="FindAFriend" />
          <span>FindAFriend</span>
        </LogoContainer>

        <ContentHeading>
          <Heading>Leve a felicidade para o seu lar</Heading>
          <img src={petsImg} alt="" />
        </ContentHeading>
        <Footer>
          <Subtitle>
            Encontre o animal de estimação ideal para seu estilo de vida!
          </Subtitle>
          <SearchContainer>
            <span>Busque um amigo:</span>
          </SearchContainer>
        </Footer>
      </HomeContainer>
    </Page>
  )
}
