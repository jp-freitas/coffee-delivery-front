import { Minus, Plus, Trash } from 'phosphor-react'
import { useCart } from '@/hooks/useCart'
import { formatPrice } from '@/utils/format'
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
import { useCoffee } from '@/hooks/useCoffee'
import { toast } from 'react-toastify'

interface CoffeeCardCartProps {
  id: string
  quantity: number
  price: number
}

export function CoffeeCardCart({ id, quantity, price }: CoffeeCardCartProps) {
  const { coffees } = useCoffee()
  const {
    handleIncreaseQuantityInCart,
    handleDecreaseQuantityInCart,
    handleRemoveItemFromCart,
  } = useCart()
  const priceFormatted = formatPrice(price * quantity).slice(3)
  const coffee = coffees.find((coffee) => coffee.id === id)

  function handleIncrease(id: string, quantity: number) {
    if (quantity === 10) {
      toast.warn('Quantidade máxima permitida')
      return
    }
    handleIncreaseQuantityInCart(id)
  }

  function handleDecrease(id: string, quantity: number) {
    if (quantity === 1) {
      toast.warn('Quantidade mínima permitida')
      return
    }
    handleDecreaseQuantityInCart(id)
  }

  return (
    <Container>
      <InfoContainer>
        <img
          src={coffee!.image}
          alt={`Imagem representativa de ${coffee!.name}`}
        />
        <InfoContent>
          <Name>{coffee!.name}</Name>
          <ActionContainer>
            <Count>
              <MinusContainer onClick={() => handleDecrease(id, quantity)}>
                <Minus size={14} weight="bold" />
              </MinusContainer>
              <Number>{quantity}</Number>
              <PlusContainer onClick={() => handleIncrease(id, quantity)}>
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
