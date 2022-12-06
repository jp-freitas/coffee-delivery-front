import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  BasePaymentMethodButton,
  PaymentMethod,
  PaymentMethodContent,
  PaymentMethodHeader,
  PaymentMethodTitle,
} from './styles'

export function Payment() {
  return (
    <PaymentMethod>
      <PaymentMethodHeader>
        <CurrencyDollar size={22} />
        <PaymentMethodTitle>
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </PaymentMethodTitle>
      </PaymentMethodHeader>
      <PaymentMethodContent>
        <BasePaymentMethodButton>
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </BasePaymentMethodButton>
        <BasePaymentMethodButton>
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </BasePaymentMethodButton>
        <BasePaymentMethodButton>
          <Money size={16} />
          DINHEIRO
        </BasePaymentMethodButton>
      </PaymentMethodContent>
    </PaymentMethod>
  )
}
