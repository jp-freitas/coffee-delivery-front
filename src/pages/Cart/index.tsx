import { Address } from './components/Address'
import { Payment } from './components/Payment'
import {
  CompleteOrder,
  Container,
  OrderInformationContainer,
  OrderInformationContent,
} from './styles'

export function Cart() {
  return (
    <Container>
      <CompleteOrder>
        <h1>Complete seu pedido</h1>
        <Address />
        <Payment />
      </CompleteOrder>
      <OrderInformationContainer>
        <h1>Cafés selecionados</h1>
        <OrderInformationContent></OrderInformationContent>
      </OrderInformationContainer>
    </Container>
  )
}
