import { createContext, ReactNode, useState } from 'react'
import { Coffee, Coffees } from '../data/coffee'

interface CartContextData {
  cart: Coffee[]
  coffees: typeof Coffees
  addNewProduct: (id: string) => void
  handleIncreaseQuantity: (id: string) => void
  handleDecreaseQuantity: (id: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem('@coffee-delivery:cart-1.0.0')
    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return { cart: [] }
  })
  const [coffees, setCoffees] = useState(Coffees)

  console.log(cart)

  function addNewProduct(id: string) {
    try {
      const updatedCart = [...Object.entries(cart).map((coffee) => coffee[1])]
      const findCoffeeInCart = updatedCart.find((coffee) => coffee.id === id)
      const findCoffee = coffees.find((coffee) => coffee.id === id)
      if (!findCoffeeInCart) {
        if (!findCoffee) {
          throw Error('Café não encontrado')
        } else {
          const newItem = {
            ...findCoffee,
          }
          updatedCart.push(newItem)
        }
      } else {
        const updateItemInCart = {
          ...findCoffeeInCart,
          quantity: findCoffeeInCart.quantity + findCoffeeInCart.quantity,
        }
        updatedCart.push(updateItemInCart)
      }
      setCart(updatedCart)
    } catch {}
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
    <CartContext.Provider
      value={{
        cart,
        coffees,
        addNewProduct,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
