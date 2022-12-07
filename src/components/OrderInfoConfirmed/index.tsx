import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  AddressInformation,
  DeliveryInformation,
  InfoSection,
  PaymentInformation,
} from './styles'

export function OrderInfoConfirmed() {
  return (
    <InfoSection>
      <AddressInformation>
        <MapPin size={16} weight="fill" />
        <p>
          Entrega em <span>Rua São José, 59</span>
          <br />
          Jardim Liberdade - Itumbiara, GO
        </p>
      </AddressInformation>
      <DeliveryInformation>
        <Timer size={16} weight="fill" />
        <p>
          Previsão de entrega
          <br />
          <span>20 min - 30 min </span>
        </p>
      </DeliveryInformation>
      <PaymentInformation>
        <CurrencyDollar size={16} weight="fill" />
        <p>
          Pagamento na entrega
          <br />
          <span>Cartão de Crédito</span>
        </p>
      </PaymentInformation>
    </InfoSection>
  )
}
