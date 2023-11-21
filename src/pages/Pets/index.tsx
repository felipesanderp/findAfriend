import logoImg from '../../assets/logo-findafriend.svg'

import { Container, Aside, AsideHeader, AsideBody } from './styles'

export function PetsPage() {
  return (
    <Container>
      <Aside>
        <AsideHeader>
          <img src={logoImg} alt="" />
        </AsideHeader>
        <AsideBody></AsideBody>
      </Aside>
    </Container>
  )
}
