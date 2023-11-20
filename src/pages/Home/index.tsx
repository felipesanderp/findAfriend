import {
  Page,
  HomeContainer,
  LogoContainer,
  ContentHeading,
  Heading,
  Footer,
  Subtitle,
  SearchContainer,
  UFSelectContainer,
  StateSelectContainer,
} from './styles'

import logoImg from '../../assets/logo-findafriend.svg'
import petsImg from '../../assets/pets.svg'
import { Select } from '../../components/Select'

const ufs = [
  { value: 'SP', label: 'SP' },
  { value: 'RJ', label: 'RJ' },
]

const states = [
  { label: 'São Paulo', value: 'SP' },
  { label: 'Rio de Janeiro', value: 'RJ' },
]

export function Home() {
  function handleSelectUF(value: string) {
    console.log(value)
  }

  function handleSelectState(value: string) {
    console.log(value)
  }

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
          <UFSelectContainer>
            <Select options={ufs} onSelect={handleSelectUF} isOutlined />
          </UFSelectContainer>
          <StateSelectContainer>
            <Select options={states} onSelect={handleSelectState} />
          </StateSelectContainer>
        </Footer>
      </HomeContainer>
    </Page>
  )
}
