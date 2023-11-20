import { useState } from 'react'
import logoImg from '../../../assets/logo-findafriend.svg'
import petsImg from '../../../assets/pets.svg'
import { Input } from '../../../components/Input'

import { Banner, LoginContainer, Logo, Content, Title, Form } from './styles'
import { Button } from '../../../components/Button'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <LoginContainer>
      <Banner>
        <Logo>
          <img src={logoImg} alt="" />
          <span>FindAFriend</span>
        </Logo>
        <img src={petsImg} alt="" />
      </Banner>

      <Content>
        <Title>Boas-vindas!</Title>
        <Form>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            label="Email"
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            label="Senha"
          />

          <Button className="firstButton" title="Login" variant="primary" />
          <Button title="Cadastrar minha organização" variant="secondary" />
        </Form>
      </Content>
    </LoginContainer>
  )
}
