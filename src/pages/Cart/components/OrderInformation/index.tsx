import { NavLink } from 'react-router-dom'
import { CoffeeCardCart } from '../../../../components/CoffeeCardCart'
import { useCart } from '../../../../hooks/useCart'
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
  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   const newSumAmount = { ...sumAmount };
  //   newSumAmount[product.id] = product.amount;
  //   return newSumAmount;
  // }, {} as CartItemsAmount)

  const { cart } = useCart()
  console.log(cart.map((item) => item.id))

  return (
    <Container>
      <ItemsList>
        {/* {cartItems.map((item) => {
          return <CoffeeCardCart key={item.id} />
        })} */}
      </ItemsList>
      <Resume>
        <Items>
          <p>Total de itens</p>
          <span>R$ 19,80</span>
        </Items>
        <Delivery>
          <p>Entrega</p>
          <span>R$ 3,50</span>
        </Delivery>
        <Total>
          <p>Total</p>
          <span>R$ 23,30</span>
        </Total>
        <NavLink to="/order-confirmation" title="Confirmar Pedido">
          <ButtonConfirmation>CONFIRMAR PEDIDO</ButtonConfirmation>
        </NavLink>
      </Resume>
    </Container>
  )
}
