import { createContext, ReactNode, useEffect, useState } from 'react'
import { Coffee } from '../@types/coffee'
import { api } from '../services/api'

interface CartContextData {
  cart: Coffee[]
  coffees: Coffee[]
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
    return []
  })
  const [coffees, setCoffees] = useState<Coffee[]>([])

  console.log(cart)

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

  function addNewProduct(id: string) {
    try {
      const updatedCart = [...cart]
      const findCoffeeInCart = updatedCart.find((coffee) => coffee.id === id)
      const currentQuantity = findCoffeeInCart ? findCoffeeInCart.quantity : 0
      const newQuantityCoffee = coffees.find((coffee) =>
        coffee.id === id ? coffee.quantity : coffee,
      )
      const newQuantityCart = currentQuantity + newQuantityCoffee!.quantity
      if (findCoffeeInCart) {
        findCoffeeInCart.quantity = newQuantityCart
        resetQuantity(id)
      } else {
        const findCoffee = coffees.find((coffee) => coffee.id === id)
        if (findCoffee) {
          const newItem = {
            ...findCoffee,
          }
          updatedCart.push(newItem)
          resetQuantity(id)
        } else {
          throw Error('Café não encontrado')
        }
      }
      setCart(updatedCart)
      localStorage.setItem(
        '@coffee-delivery:cart-1.0.0',
        JSON.stringify(updatedCart),
      )
    } catch {
      throw Error('Erro ao adicionar produto')
    }
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
