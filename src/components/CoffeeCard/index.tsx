import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  Amount,
  BuySection,
  CardContainer,
  Count,
  Description,
  MinusContainer,
  Number,
  PlusContainer,
  Prefix,
  Tag,
  Title,
} from './styles'

import coffeeExpresso from '../../assets/coffee-expresso.svg'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={coffeeExpresso} alt="Café Irlandês" />
      <Tag>TRADICIONAL</Tag>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <BuySection>
        <Prefix>
          R$<Amount>9,90</Amount>
        </Prefix>
        <Count>
          <MinusContainer>
            <Minus size={14} weight="bold" />
          </MinusContainer>
          <Number>1</Number>
          <PlusContainer>
            <Plus size={14} weight="bold" />
          </PlusContainer>
        </Count>
        <button>
          <ShoppingCart size={20} weight="fill" />
        </button>
      </BuySection>
    </CardContainer>
  )
}
