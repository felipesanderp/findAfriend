import logoImg from '../../assets/logo-findafriend.svg'

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
          <span>Encontre 324 amigos na sua cidade</span>
          <SelectContainer></SelectContainer>
        </ContentHeader>

        <ContainerCards></ContainerCards>
      </Content>
    </Container>
  )
}
