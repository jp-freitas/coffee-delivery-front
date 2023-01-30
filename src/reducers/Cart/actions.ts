import { ProductInCart } from '@/@types/productInCart'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART',
  INCREASE_PRODUCT_QUANTITY = 'INCREASE_PRODUCT_QUANTITY',
  DECREASE_PRODUCT_QUANTITY = 'DECREASE_PRODUCT_QUANTITY',
}

export function addNewProductAction(productInCart: ProductInCart) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: { productInCart },
  }
}

export function removeProductFromCart(productId: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: {
      productId,
    },
  }
}

export function increaseProductQuantity(productId: string) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  }
}

export function decreaseProductQuantity(productId: string) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload: {
      productId,
    },
  }
}
