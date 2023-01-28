import { Address } from './address'

export type Cart = {
  id: string
  products: {
    product_id: string
    quantity: number
    price: number
  }[]
  amount: number
  address: Address
  payment: string
}
