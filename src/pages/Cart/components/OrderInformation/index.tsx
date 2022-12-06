import { CoffeeCardCart } from '../../../../components/CoffeeCardCart'
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
  return (
    <Container>
      <ItemsList>
        <CoffeeCardCart />
        <CoffeeCardCart />
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
        <ButtonConfirmation>CONFIRMAR PEDIDO</ButtonConfirmation>
      </Resume>
    </Container>
  )
}
