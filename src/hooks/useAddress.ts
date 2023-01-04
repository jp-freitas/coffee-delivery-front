import { useContext } from 'react'
import { AddressContext } from '../contexts/AddressContext'

export function useAddress() {
  const value = useContext(AddressContext)
  return value
}
