import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import {
  BasePaymentMethodButton,
  PaymentMethod,
  PaymentMethodContent,
  PaymentMethodHeader,
  PaymentMethodTitle,
} from './styles'

export function Payment() {
  const [paymentType, setPaymentType] = useState('')

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
        <BasePaymentMethodButton
          isActive={paymentType === 'credit'}
          onClick={() => setPaymentType('credit')}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </BasePaymentMethodButton>
        <BasePaymentMethodButton
          isActive={paymentType === 'debit'}
          onClick={() => setPaymentType('debit')}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </BasePaymentMethodButton>
        <BasePaymentMethodButton
          isActive={paymentType === 'money'}
          onClick={() => setPaymentType('money')}
        >
          <Money size={16} />
          DINHEIRO
        </BasePaymentMethodButton>
      </PaymentMethodContent>
    </PaymentMethod>
  )
}
