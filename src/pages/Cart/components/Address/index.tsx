import { MapPinLine } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { Input } from '../../../../components/Input'
import { cep } from '../../../../services/cep'
import {
  AddressSection,
  AddressSectionContent,
  AddressSectionHeader,
  AddressSectionTitle,
  FirstGroup,
  SecondGroup,
} from './styles'

export function Address() {
  const [cepInput, setCepInput] = useState('')
  const [streetInput, setStreetInput] = useState('')
  const [neighborhoodInput, setNeighborhoodInput] = useState('')
  const [cityInput, setCityInput] = useState('')
  const [stateInput, setStateInput] = useState('')
  const [complementInput, setComplementInput] = useState('')
  const [numberInput, setNumberInput] = useState('')

  async function validateCEP(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.value) return
    const response = await cep.get(`/${cepInput}`)
    setStreetInput('...')
    setNeighborhoodInput('...')
    setCityInput('...')
    setStateInput('...')

    setTimeout(() => {
      setCepInput(response.data.cep)
      setStateInput(response.data.state)
      setCityInput(response.data.city)
      setNeighborhoodInput(response.data.neighborhood)
      setStreetInput(response.data.street)
    }, 1000)
  }

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
        <Input
          name="cep"
          type="text"
          placeholder="CEP"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={8}
          value={cepInput}
          onChange={(event) => setCepInput(event.target.value)}
          onBlur={validateCEP}
        />
        <Input
          name="street"
          type="text"
          placeholder="Rua"
          value={streetInput || ''}
          onChange={(event) => setStreetInput(event.target.value)}
        />
        <FirstGroup>
          <Input
            name="number"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Número"
            value={numberInput}
            onChange={(event) => setNumberInput(event.target.value)}
          />
          <Input
            name="complement"
            type="text"
            placeholder="Complemento"
            optionalText="Opcional"
            value={complementInput}
            onChange={(event) => setComplementInput(event.target.value)}
          />
        </FirstGroup>
        <SecondGroup>
          <Input
            name="neighborhood"
            type="text"
            placeholder="Bairro"
            value={neighborhoodInput}
            onChange={(event) => setNeighborhoodInput(event.target.value)}
          />
          <Input
            name="city"
            type="text"
            placeholder="Cidade"
            value={cityInput}
            onChange={(event) => setCityInput(event.target.value)}
          />
          <Input
            name="state"
            type="text"
            placeholder="UF"
            value={stateInput}
            onChange={(event) => setStateInput(event.target.value)}
          />
        </SecondGroup>
      </AddressSectionContent>
    </AddressSection>
  )
}
