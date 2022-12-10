import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../@types/coffee'
import { api } from '../services/api'

interface CoffeeContextProps {
  coffees: Coffee[]
  handleIncreaseQuantity: (id: string) => void
  handleDecreaseQuantity: (id: string) => void
  resetQuantity: (id: string) => void
}

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContext = createContext<CoffeeContextProps>(
  {} as CoffeeContextProps,
)

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])

  useEffect(() => {
    async function loadCoffees() {
      const response = await api.get<Coffee[]>('coffees')
      const coffees = response.data.map((coffee) => coffee)
      setCoffees(coffees)
    }
    loadCoffees()
  }, [])

  function resetQuantity(id: string) {
    const coffee = coffees.map((coffee) =>
      coffee.id === id
        ? {
            ...coffee,
            quantity: 1,
          }
        : coffee,
    )
    setCoffees(coffee)
  }

  function handleIncreaseQuantity(id: string) {
    const coffee = coffees.map((coffee) =>
      coffee.id === id
        ? coffee.quantity >= 10
          ? coffee
          : { ...coffee, quantity: coffee.quantity + 1 }
        : coffee,
    )
    setCoffees(coffee)
  }

  function handleDecreaseQuantity(id: string) {
    const coffee = coffees.map((coffee) =>
      coffee.id === id
        ? coffee.quantity <= 1
          ? coffee
          : { ...coffee, quantity: coffee.quantity - 1 }
        : coffee,
    )
    setCoffees(coffee)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        resetQuantity,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
