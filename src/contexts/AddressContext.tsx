import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { Address } from '../@types/address'

interface AddressContextData {
  address: Address
  setAddress: Dispatch<SetStateAction<Address>>
}

interface AddressContextProviderProps {
  children: ReactNode
}

export const AddressContext = createContext<AddressContextData>(
  {} as AddressContextData,
)

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [address, setAddress] = useState<Address>({
    cep: '',
    street: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    number: '',
  })

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  )
}
