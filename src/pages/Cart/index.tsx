import { Address } from './components/Address'
import { OrderInformation } from './components/OrderInformation'
import { Payment } from './components/Payment'
import { CompleteOrder, Container, OrderInformationContainer } from './styles'

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
        <OrderInformation />
      </OrderInformationContainer>
    </Container>
  )
}
