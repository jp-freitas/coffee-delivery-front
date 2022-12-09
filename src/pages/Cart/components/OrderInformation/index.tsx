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
  const { cart } = useCart()

  // const cartItemsAmount = cart.reduce((sumAmount, product) => {
  //   const newSumAmount = { ...sumAmount };
  //   newSumAmount[product.id] = product.amount;
  //   return newSumAmount;
  // }, {} as CartItemsAmount)

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
