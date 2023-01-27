export type Cart = {
  id: string
  products: {
    product_id: string
    name: string
    image: string
    quantity: number
    price: number
  }[]
  amount: number
}
