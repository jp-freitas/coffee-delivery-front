import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'
import {
  Amount,
  BuyButton,
  BuySection,
  CardContainer,
  CardContent,
  Count,
  Description,
  MinusContainer,
  Number,
  PlusContainer,
  Prefix,
  Tag,
  TagSection,
  Title,
} from './styles'
interface CoffeeCardProps {
  id: string
  image: string
  tags: string[]
  name: string
  description: string
  amount: number
  quantity: number
}

export function CoffeeCard({
  id,
  image,
  tags,
  name,
  description,
  amount,
  quantity,
}: CoffeeCardProps) {
  const { handleDecreaseQuantity, handleIncreaseQuantity, createNewCart } =
    useCart()

  return (
    <CardContainer>
      <img src={image} alt={`Imagem representativa a ${name}`} />
      <CardContent>
        <TagSection>
          {tags.map((tag) => {
            return <Tag key={tag}>{tag.toUpperCase()}</Tag>
          })}
        </TagSection>
        <Title>{name}</Title>
        <Description>{description}</Description>
        <BuySection>
          <Prefix>
            R$
            <Amount>{amount}</Amount>
          </Prefix>
          <Count>
            <MinusContainer
              onClick={() => {
                handleDecreaseQuantity(id)
              }}
            >
              <Minus size={14} weight="bold" />
            </MinusContainer>
            <Number>{quantity}</Number>
            <PlusContainer
              onClick={() => {
                handleIncreaseQuantity(id)
              }}
            >
              <Plus size={14} weight="bold" />
            </PlusContainer>
          </Count>
          <BuyButton onClick={() => createNewCart(id)}>
            <ShoppingCartSimple size={20} weight="fill" />
          </BuyButton>
        </BuySection>
      </CardContent>
    </CardContainer>
  )
}
