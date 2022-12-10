import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function useCoffee() {
  const value = useContext(CoffeeContext)
  return value
}
