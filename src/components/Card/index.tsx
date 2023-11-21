import { CardContainer, Content, Header, Label } from './styles'

interface CardProps {
  src: string
  label: string
}

export function Card({ src, label }: CardProps) {
  return (
    <CardContainer>
      <Header>
        <img src={src} alt="" />
        <Content>
          <Label>{label}</Label>
        </Content>
      </Header>
    </CardContainer>
  )
}
