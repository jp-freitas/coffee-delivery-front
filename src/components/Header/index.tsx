import { MapPin, ShoppingCart } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import logoImg from '@/assets/coffee-delivery.svg'
import { useCart } from '@/hooks/useCart'

import { Cart, Container, Content, Location } from './styles'
import { toast } from 'react-toastify'

export function Header() {
  const { cart } = useCart()
  const navigate = useNavigate()

  function handleGoToCartPage() {
    if (cart.length === 0) {
      toast.warn('Insira algum item no carrinho para prosseguir!')
      return
    }

    navigate('/cart')
  }

  return (
    <Container>
      <Content>
        <img
          src={logoImg}
          alt="logo do coffee delivery"
          onClick={() => navigate('/')}
        />
        <nav>
          <Location>
            <MapPin size={22} weight="fill" />
            <p>Itumbiara, GO</p>
          </Location>
          <Cart onClick={handleGoToCartPage}>
            <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span> : ''}
          </Cart>
        </nav>
      </Content>
    </Container>
  )
}
