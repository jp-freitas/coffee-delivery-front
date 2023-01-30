import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CoffeeCardCart } from '@/components/CoffeeCardCart'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/format'

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
  const { cart, paymentMethod, delivery, total, cartSubTotal } = useCart()
  const navigate = useNavigate()
  // const verifyAddress = address.cep === ''
  const verifyPaymentMethod = paymentMethod === ''

  const productsList = cart.map((item) => item)
  console.log(productsList)

  // function handleConfirmOrder() {
  //   if (verifyAddress && verifyPaymentMethod) {
  //     toast.warn('Preencha o endereço e selecione o método de pagamento!')
  //     return
  //   }
  //   // setCart([])
  //   localStorage.setItem('@coffee-delivery:cart-1.0.0', JSON.stringify([]))
  //   navigate('/order-confirmation')
  // }

  // console.log(cart)

  return (
    <Container>
      <ItemsList>
        {productsList.map((product) => {
          console.log(product)
          return (
            <CoffeeCardCart
              key={product.product_id}
              id={product.product_id}
              quantity={product.quantity}
              price={product.price}
            />
          )
        })}
      </ItemsList>
      <Resume>
        <Items>
          <p>Total de itens</p>
          <span>{formatPrice(cartSubTotal)}</span>
        </Items>
        <Delivery>
          <p>Entrega</p>
          <span>{formatPrice(delivery)}</span>
        </Delivery>
        <Total>
          <p>Total</p>
          <span>{formatPrice(total)}</span>
        </Total>
        <ButtonConfirmation
          // onClick={handleConfirmOrder}
          title="Confirmar pedido"
        >
          CONFIRMAR PEDIDO
        </ButtonConfirmation>
      </Resume>
    </Container>
  )
}
