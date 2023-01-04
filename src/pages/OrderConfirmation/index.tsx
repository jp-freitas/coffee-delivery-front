import imgOrderDelivery from '../../assets/delivery-order.svg'
import { OrderInfoConfirmed } from '../../components/OrderInfoConfirmed'
import { useAddress } from '../../hooks/useAddress'
import {
  Container,
  Content,
  Header,
  ImageSection,
  Paragraph,
  Title,
} from './styles'

export function OrderConfirmation() {
  const { address } = useAddress()

  console.log(address)

  return (
    <Container>
      <Header>
        <Title>Uhu! Pedido confirmado</Title>
        <Paragraph>
          Agora é só aguardar que logo o café chegará até você
        </Paragraph>
      </Header>
      <Content>
        <OrderInfoConfirmed />
        <ImageSection>
          <img src={imgOrderDelivery} alt="Ilustracao de um entregador" />
        </ImageSection>
      </Content>
    </Container>
  )
}
