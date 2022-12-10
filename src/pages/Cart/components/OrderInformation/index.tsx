import { NavLink } from 'react-router-dom'
import { CoffeeCardCart } from '../../../../components/CoffeeCardCart'
import { useCart } from '../../../../hooks/useCart'
import { formatPrice } from '../../../../utils/format'
import {
  ButtonConfirmation,
  Container,
  Delivery,
  Items,
  ItemsList,
  Resume,
  Total,
} from './styles'

export function OrderInformation() {
  const { cart, cartSubTotal, delivery, total } = useCart()

  return (
    <Container>
      <ItemsList>
        {cart.map((item) => {
          return (
            <CoffeeCardCart
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
            />
          )
        })}
      </ItemsList>
      <Resume>
        <Items>
          <p>Total de itens</p>
          <span>{formatPrice(cartSubTotal)}</span>
        </Items>
        <Delivery>
          <p>Entrega</p>
          <span>{formatPrice(delivery)}</span>
        </Delivery>
        <Total>
          <p>Total</p>
          <span>{formatPrice(total)}</span>
        </Total>
        <NavLink to="/order-confirmation" title="Confirmar Pedido">
          <ButtonConfirmation>CONFIRMAR PEDIDO</ButtonConfirmation>
        </NavLink>
      </Resume>
    </Container>
  )
}
