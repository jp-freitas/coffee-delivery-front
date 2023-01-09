/* eslint-disable no-unused-vars */
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useCart } from '@/hooks/useCart'
import {
  BasePaymentMethodButton,
  PaymentMethod,
  PaymentMethodContent,
  PaymentMethodHeader,
  PaymentMethodTitle,
} from './styles'

enum PaymentEnum {
  credit = 'Crédito',
  debit = 'Débito',
  money = 'Dinheiro',
}

export function Payment() {
  const { paymentMethod, setPaymentMethod } = useCart()

  function handlePaymentMethod(type: string) {
    type === paymentMethod ? setPaymentMethod('') : setPaymentMethod(type)
  }

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
          isActive={paymentMethod === PaymentEnum.credit}
          onClick={() => handlePaymentMethod(PaymentEnum.credit)}
        >
          <CreditCard size={16} />
          CARTÃO DE CRÉDITO
        </BasePaymentMethodButton>
        <BasePaymentMethodButton
          isActive={paymentMethod === PaymentEnum.debit}
          onClick={() => handlePaymentMethod(PaymentEnum.debit)}
        >
          <Bank size={16} />
          CARTÃO DE DÉBITO
        </BasePaymentMethodButton>
        <BasePaymentMethodButton
          isActive={paymentMethod === PaymentEnum.money}
          onClick={() => handlePaymentMethod(PaymentEnum.money)}
        >
          <Money size={16} />
          DINHEIRO
        </BasePaymentMethodButton>
      </PaymentMethodContent>
    </PaymentMethod>
  )
}
