import { Address } from './address'
import { ProductInCart } from './productInCart'

export type Cart = {
  products: ProductInCart
  amount: number
  address: Address
  payment: string
}
