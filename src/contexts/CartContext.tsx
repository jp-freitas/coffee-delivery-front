import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from 'react'
import { Address } from '@/@types/address'
import { Coffee } from '@/@types/coffee'

import { useCoffee } from '@/hooks/useCoffee'

interface CartContextData {
  cart: Coffee[]
  address: Address
  paymentMethod: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
  setAddress: Dispatch<SetStateAction<Address>>
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
  const [cart, dispatch] = useReducer((state: Coffee[], action: any) => {
    if (action.type === 'ADD_NEW_PRODUCT') {
      return [...state, action.payload.updatedCart]
    }
    return state
  }, [])
  const [address, setAddress] = useState<Address>({
    cep: '',
    street: '',
    neighborhood: '',
    complement: '',
    city: '',
    state: '',
    number: '',
  })
  const [paymentMethod, setPaymentMethod] = useState('')
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
      dispatch({
        type: 'ADD_NEW_PRODUCT',
        payload: { updatedCart },
      })
      // setCart(updatedCart)
    } catch {
      throw Error('Erro ao adicionar produto')
    }
  }

  function handleRemoveItemFromCart(id: string) {
    const cartItems = cart.filter((item) => item.id !== id)
    dispatch({
      type: 'REMOVE_PRODUCT_FROM_CART',
      payload: {
        cartItems,
      },
    })
    // setCart(cartItems)
    // localStorage.setItem(
    //   '@coffee-delivery:cart-1.0.0',
    //   JSON.stringify(cartItems),
    // )
  }

  function handleIncreaseQuantityInCart(id: string) {
    const cartItems = cart.map((item) => {
      return item.id === id
        ? {
          ...item,
          quantity: item.quantity < 10 ? item.quantity + 1 : item.quantity,
        }
        : item
    })
    dispatch({
      type: 'INCREASE_PRODUCT_QUANTITY',
      payload: {
        cartItems,
      },
    })
  }

  function handleDecreaseQuantityInCart(id: string) {
    const cartItems = cart.map((item) => {
      return item.id === id
        ? {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
        }
        : item
    })
    dispatch({
      type: 'DECREASE_PRODUCT_QUANTITY',
      payload: {
        cartItems,
      },
    })
    // setCart(cartItems)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        address,
        setAddress,
        paymentMethod,
        setPaymentMethod,
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
