import { HomeContainer, LogoContainer, Logo } from './styles'

import logoImg from '../../assets/logo-findafriend.svg'
import dogsImg from '../../assets/dogs.png'

export function Home() {
  return (
    <HomeContainer>
      <LogoContainer>
        <Logo>
          <img src={logoImg} alt="FindAFriend" />
          <h2>FindAFriend</h2>
        </Logo>

        <h1>Leve a felicidade para o seu lar</h1>

        <span>
          Encontre o animal de estimação ideal para o seu estilo de vida!
        </span>
      </LogoContainer>
      <div>
        <img src={dogsImg} alt="" />
      </div>
    </HomeContainer>
  )
}
