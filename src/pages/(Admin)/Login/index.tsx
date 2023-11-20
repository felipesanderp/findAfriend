import logoImg from '../../../assets/logo-findafriend.svg'
import petsImg from '../../../assets/pets.svg'

import { Banner, LoginContainer, Logo } from './styles'

export function LoginPage() {
  return (
    <LoginContainer>
      <Banner>
        <Logo>
          <img src={logoImg} alt="" />
          <span>FindAFriend</span>
        </Logo>
        <img src={petsImg} alt="" />
      </Banner>
    </LoginContainer>
  )
}
