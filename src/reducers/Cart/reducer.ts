/* eslint-disable no-unused-vars */
import { Cart } from '@/@types/cart'
import { ProductInCart } from '@/@types/productInCart'
import { ActionTypes } from './actions'

interface CartState {
  cart: ProductInCart[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload.productInCart],
      }
    case ActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product_id !== action.payload.productId,
        ),
      }
    case ActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.product_id === action.payload.productId
            ? {
              product_id: item.product_id,
              quantity: item.quantity + 1,
              price: item.price,
            }
            : item
        }),
      }
    case ActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.product_id === action.payload.productId
            ? {
              product_id: item.product_id,
              quantity: item.quantity - 1,
              price: item.price,
            }
            : item
        }),
      }
    default:
      return state
  }
}
