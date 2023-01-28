import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from 'react'

// import { Address } from '@/@types/address'
import { useCoffee } from '@/hooks/useCoffee'
import { Cart } from '@/@types/cart'

interface CartContextData {
  cart: Cart[]
  // address: Address
  paymentMethod: string
  setPaymentMethod: Dispatch<SetStateAction<string>>
  // setAddress: Dispatch<SetStateAction<Address>>
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
  const [cart, dispatch] = useReducer((state: Cart[], action: any) => {
    if (action.type === 'ADD_NEW_PRODUCT') {
      return [...state, action.payload.itemCart]
    }
    switch (action.type) {
      case 'ADD_NEW_PRODUCT':
        return [...state, action.payload.itemCart]
      case 'REMOVE_PRODUCT_FROM_CART':
        return action.payload.cartItems
      case 'INCREASE_PRODUCT_QUANTITY':
        return action.payload.cartItems
      case 'DECREASE_PRODUCT_QUANTITY':
        return action.payload.cartItems
      default:
        break
    }
    return state
  }, [])
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
      const findCoffeeInCart = cart.find(
        (coffee) => coffee.products.product_id === id,
      )
      const findCoffee = coffees.find((coffee) => coffee.id === id)

      if (findCoffeeInCart) {
        const quantity = findCoffeeInCart.products.quantity
        const coffeeQuantity = findCoffee!.quantity
        findCoffeeInCart.products.quantity = quantity + coffeeQuantity
        resetQuantity(id)
      } else {
        const itemCart = findCoffee && {
          products: {
            product_id: findCoffee.id,
            quantity: findCoffee.quantity,
            price: findCoffee.price,
          },
        }
        resetQuantity(id)
        dispatch({
          type: 'ADD_NEW_PRODUCT',
          payload: { itemCart },
        })
      }
    } catch (error) {
      throw Error('Erro ao adicionar o produto')
    }
  }

  function handleRemoveItemFromCart(id: string) {
    const cartItems = cart.filter((item) => item.products.product_id !== id)
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
      return item.products.product_id === id
        ? {
          products: {
            product_id: item.products.product_id,
            quantity: item.products.quantity + 1,
            price: item.products.price,
          },
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
      return item.products.product_id === id
        ? {
          products: {
            product_id: item.products.product_id,
            quantity: item.products.quantity - 1,
            price: item.products.price,
          },
        }
        : item
    })
    dispatch({
      type: 'DECREASE_PRODUCT_QUANTITY',
      payload: {
        cartItems,
      },
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        // address,
        // setAddress,
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
