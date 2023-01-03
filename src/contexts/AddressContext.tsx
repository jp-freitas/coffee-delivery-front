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
  const [address, setAddress] = useState<Address>()

  setAddress({
    cep: '75533250',
    street: 'Rua Sumaré',
    neighborhood: 'Setor Planalto',
    city: 'Itumbiara',
    state: 'Goiás',
    complement: '',
    number: '819',
  })

  return (
    <AddressContext.Provider value={address}>
      {children}
    </AddressContext.Provider>
  )
}
