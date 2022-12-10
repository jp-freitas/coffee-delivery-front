import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/format'
import {
  ActionContainer,
  Amount,
  Container,
  Count,
  InfoContainer,
  InfoContent,
  MinusContainer,
  Name,
  Number,
  PlusContainer,
  RemoveButton,
} from './styles'

interface CoffeeCardCartProps {
  id: string
  image: string
  name: string
  quantity: number
  price: number
}

export function CoffeeCardCart({
  id,
  image,
  name,
  quantity,
  price,
}: CoffeeCardCartProps) {
  const {
    handleIncreaseQuantityInCart,
    handleDecreaseQuantityInCart,
    handleRemoveItemFromCart,
  } = useCart()
  const priceFormatted = formatPrice(price * quantity).slice(3)
  return (
    <Container>
      <InfoContainer>
        <img src={image} alt={`Imagem representativa de ${name}`} />
        <InfoContent>
          <Name>{name}</Name>
          <ActionContainer>
            <Count>
              <MinusContainer onClick={() => handleDecreaseQuantityInCart(id)}>
                <Minus size={14} weight="bold" />
              </MinusContainer>
              <Number>{quantity}</Number>
              <PlusContainer onClick={() => handleIncreaseQuantityInCart(id)}>
                <Plus size={14} weight="bold" />
              </PlusContainer>
            </Count>
            <RemoveButton onClick={() => handleRemoveItemFromCart(id)}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionContainer>
        </InfoContent>
      </InfoContainer>
      <Amount>{`R$ ${priceFormatted}`}</Amount>
    </Container>
  )
}
