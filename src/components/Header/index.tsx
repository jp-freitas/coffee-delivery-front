import { MapPin, ShoppingCart } from 'phosphor-react'

import { ActionsContainer, Cart, Container, Content, Location } from './styles'
import logoImg from '../../assets/coffee-delivery.svg'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo do coffee delivery" />
        <ActionsContainer>
          <Location>
            <MapPin size={22} weight="fill" />
            <p>Itumbiara, GO</p>
          </Location>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </ActionsContainer>
      </Content>
    </Container>
  )
}
