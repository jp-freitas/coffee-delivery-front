import { CoffeeCard } from '../../../../components/CoffeeCard'
import { useCoffee } from '../../../../hooks/useCoffee'
import { CardList, Container, Title } from './styles'

export function CoffeeList() {
  const { coffees } = useCoffee()

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
              price={coffee.price}
            />
          )
        })}
      </CardList>
    </Container>
  )
}
