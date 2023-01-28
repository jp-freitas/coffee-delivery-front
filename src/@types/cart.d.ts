import { Address } from './address'

export type Cart = {
  products: {
    product_id: string
    quantity: number
    price: number
  }
  amount: number
  address: Address
  payment: string
}
