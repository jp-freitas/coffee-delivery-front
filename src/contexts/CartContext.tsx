import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../@types/coffee'

import { useCoffee } from '../hooks/useCoffee'

interface CartContextData {
  cart: Coffee[]
  cartSubTotal: number
  delivery: number
  total: number
  addNewProduct: (id: string) => void
  handleIncreaseQuantityInCart: (id: string) => void
  handleDecreaseQuantityInCart: (id: string) => void
  handleRemoveItemFromCart: (id: string) => void
}

interface CartItemsAmount {
  [key: string]: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const { coffees, resetQuantity } = useCoffee()
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storagedCart = localStorage.getItem('@coffee-delivery:cart-1.0.0')
    if (storagedCart) {
      return JSON.parse(storagedCart)
    }
    return []
  })
  const initialSubTotal = 0
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount }
    newSumAmount[product.id] = product.price * product.quantity
    return newSumAmount
  }, {} as CartItemsAmount)
  const cartSubTotal = cart.reduce(
    (subTotal, item) => subTotal + cartItemsAmount[item.id],
    initialSubTotal,
  )
  const delivery = cart.length === 0 ? 0 : 3.5
  const total = cartSubTotal + delivery

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

  function handleRemoveItemFromCart(id: string) {
    const cartItems = cart.filter((item) => item.id !== id)
    setCart(cartItems)
    localStorage.setItem(
      '@coffee-delivery:cart-1.0.0',
      JSON.stringify(cartItems),
    )
  }

  function handleIncreaseQuantityInCart(id: string) {
    const cartItems = cart.map((item) =>
      item.id === id
        ? {
          ...item,
          quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity,
        }
        : item,
    )
    setCart(cartItems)
    localStorage.setItem(
      '@coffee-delivery:cart-1.0.0',
      JSON.stringify(cartItems),
    )
  }

  function handleDecreaseQuantityInCart(id: string) {
    const cartItems = cart.map((item) =>
      item.id === id
        ? {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
        }
        : item,
    )
    setCart(cartItems)
    localStorage.setItem(
      '@coffee-delivery:cart-1.0.0',
      JSON.stringify(cartItems),
    )
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartSubTotal,
        delivery,
        total,
        addNewProduct,
        handleIncreaseQuantityInCart,
        handleDecreaseQuantityInCart,
        handleRemoveItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
