import { createContext, ReactNode, useState } from 'react'
import { Address } from '../@types/address'

interface AddressContextData {
  address: Address | undefined
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
    <AddressContext.Provider value={{ address }}>
      {children}
    </AddressContext.Provider>
  )
}
