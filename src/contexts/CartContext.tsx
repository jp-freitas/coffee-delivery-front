import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from 'react'

import { useCoffee } from '@/hooks/useCoffee'
import { Cart } from '@/@types/cart'
import { cartReducer } from '@/reducers/Cart/reducer'
import {
  addNewProductAction,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '@/reducers/Cart/actions'
import { ProductInCart } from '@/@types/productInCart'

interface CartContextData {
  cart: ProductInCart[]
  paymentMethod: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
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
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] })
  const [paymentMethod, setPaymentMethod] = useState('')

  const { cart } = cartState
  console.log(cart)
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
    const findCoffeeInCart = cart.find((coffee) => coffee.product_id === id)
    const findCoffee = coffees.find((coffee) => coffee.id === id)

    if (findCoffeeInCart) {
      const quantity = findCoffeeInCart.quantity
      const coffeeQuantity = findCoffee!.quantity
      findCoffeeInCart.quantity = quantity + coffeeQuantity
      resetQuantity(id)
    } else {
      const productInCart = findCoffee && {
        product_id: findCoffee.id,
        quantity: findCoffee.quantity,
        price: findCoffee.price,
      }
      resetQuantity(id)
      productInCart && dispatch(addNewProductAction(productInCart))
    }
  }

  function handleRemoveItemFromCart(productId: string) {
    dispatch(removeProductFromCart(productId))
  }

  function handleIncreaseQuantityInCart(productId: string) {
    dispatch(increaseProductQuantity(productId))
  }

  function handleDecreaseQuantityInCart(productId: string) {
    dispatch(decreaseProductQuantity(productId))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
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
