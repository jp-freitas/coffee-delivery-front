import { MapPin, ShoppingCart } from 'phosphor-react'

import { Cart, Container, Content, Location } from './styles'
import logoImg from '../../assets/coffee-delivery.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Content>
        <NavLink to="/" title="Home">
          <img src={logoImg} alt="logo do coffee delivery" />
        </NavLink>
        <nav>
          <Location>
            <MapPin size={22} weight="fill" />
            <p>Itumbiara, GO</p>
          </Location>
          <NavLink to="/cart" title="Carrinho">
            <Cart>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </NavLink>
        </nav>
      </Content>
    </Container>
  )
}
