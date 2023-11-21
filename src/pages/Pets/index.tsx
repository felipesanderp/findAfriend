import logoImg from '../../assets/logo-findafriend.svg'
import { Card } from '../../components/Card'

import {
  Container,
  Aside,
  AsideHeader,
  AsideBody,
  Content,
  ContentHeader,
  SelectContainer,
  ContainerCards,
} from './styles'

import cat1 from '../../assets/pets/cat-1.png'
import dog1 from '../../assets/pets/dog-1.png'
import dog2 from '../../assets/pets/dog-2.png'

export function PetsPage() {
  return (
    <Container>
      <Aside>
        <AsideHeader>
          <img src={logoImg} alt="" />
        </AsideHeader>
        <AsideBody></AsideBody>
      </Aside>
      <Content>
        <ContentHeader>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectContainer></SelectContainer>
        </ContentHeader>

        <ContainerCards>
          <Card src={cat1} label="Juscelino" />

          <Card src={dog1} label="Alfredo" />

          <Card src={dog2} label="Getúlio" />

          <Card src={dog2} label="Getúlio" />

          <Card src={dog2} label="Getúlio" />
        </ContainerCards>
      </Content>
    </Container>
  )
}
