import { MapPinLine } from 'phosphor-react'
import {
  AddressSection,
  AddressSectionContent,
  AddressSectionHeader,
  AddressSectionTitle,
} from './styles'

export function Address() {
  return (
    <AddressSection>
      <AddressSectionHeader>
        <MapPinLine size={22} />
        <AddressSectionTitle>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </AddressSectionTitle>
      </AddressSectionHeader>
      <AddressSectionContent>
        <input type="number" placeholder="CEP" />
        <input type="text" placeholder="Rua" />
        <div>
          <input type="number" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </div>
        <div>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </div>
      </AddressSectionContent>
    </AddressSection>
  )
}
