import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useAddress } from '../../hooks/useAddress'
import {
  AddressInformation,
  DeliveryInformation,
  InfoSection,
  PaymentInformation,
} from './styles'

export function OrderInfoConfirmed() {
  const { address } = useAddress()

  return (
    <InfoSection>
      <AddressInformation>
        <MapPin size={16} weight="fill" />
        <p>
          Entrega em <span>{`${address.street}, ${address.number}`}</span>
          <br />
          {`${address.neighborhood} - ${address.city}, ${address.state}`}
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
