import { CoffeeCard } from '../../../../components/CoffeeCard'
import { useCart } from '../../../../hooks/useCart'
import { CardList, Container, Title } from './styles'

export function CoffeeList() {
  const { coffees } = useCart()

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardList>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              image={coffee.image}
              quantity={coffee.quantity}
              tags={coffee.tags}
              name={coffee.name}
              description={coffee.description}
              amount={coffee.amount}
            />
          )
        })}
      </CardList>
    </Container>
  )
}
