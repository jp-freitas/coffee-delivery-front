import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
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
  image: string
  tags: string[]
  name: string
  description: string
  amount: string
}

export function CoffeeCard({
  image,
  tags,
  name,
  description,
  amount,
}: CoffeeCardProps) {
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
            <Amount>{parseFloat(amount).toFixed(2)}</Amount>
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
          <BuyButton>
            <ShoppingCartSimple size={20} weight="fill" />
          </BuyButton>
        </BuySection>
      </CardContent>
    </CardContainer>
  )
}
