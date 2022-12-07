import { createContext, ReactNode, useState } from 'react'
import { Coffees } from '../data/coffee'

export type Cart = {
  items: {
    id: string
    image: string
    name: string
    quantity: number
    value: number
  }
  // amount: number
  // delivery: number
}

interface CartContextData {
  cart: Cart[]
  coffees: typeof Coffees
  createNewCart: (id: string) => void
  handleIncreaseQuantity: (id: string) => void
  handleDecreaseQuantity: (id: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart[]>([] as Cart[])
  const [coffees, setCoffees] = useState(Coffees)

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

  function createNewCart(id: string) {
    const findCoffee = coffees.find((coffee) => coffee.id === id)
    if (!findCoffee) {
      return new Error('Café não encontrado')
    } else {
      const { id, image, name, amount, quantity } = findCoffee
    }
  }

  console.log(cart)
  return (
    <CartContext.Provider
      value={{
        cart,
        coffees,
        createNewCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
