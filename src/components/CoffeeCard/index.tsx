import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Coffee } from '../../@types/coffee'
import { useCart } from '../../hooks/useCart'
import { useCoffee } from '../../hooks/useCoffee'
import { formatPrice } from '../../utils/format'
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

export function CoffeeCard({
  id,
  image,
  tags,
  name,
  description,
  price,
  quantity,
}: Coffee) {
  const { addNewProduct } = useCart()
  const { handleDecreaseQuantity, handleIncreaseQuantity } = useCoffee()
  const priceFormatted = formatPrice(price).slice(3)
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
            <Amount>{priceFormatted}</Amount>
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
          <BuyButton
            onClick={() => addNewProduct(id)}
            title="Adicionar ao Carrinho"
          >
            <ShoppingCartSimple size={20} weight="fill" />
          </BuyButton>
        </BuySection>
      </CardContent>
    </CardContainer>
  )
}
