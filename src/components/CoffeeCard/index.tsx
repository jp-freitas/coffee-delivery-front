import { ShoppingCart } from 'phosphor-react'
import { CardContainer } from './styles'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src="" alt="" />
      <span>TRADICIONAL</span>
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <p>R$ 9,90</p>
      <span></span>
      <button>
        <ShoppingCart width={24} weight="fill" />
      </button>
    </CardContainer>
  )
}
