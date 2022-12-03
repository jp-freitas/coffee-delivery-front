import { CoffeeCard } from '../../../../components/CoffeeCard'
import { Coffees } from '../../../../data/coffee'
import { CardList, Container, Title } from './styles'

export function CoffeeList() {
  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardList>
        {Coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              image={coffee.image}
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
