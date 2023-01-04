import { MapPinLine } from 'phosphor-react'
import { ChangeEvent, createRef, forwardRef, InputHTMLAttributes } from 'react'
import { useAddress } from '../../../../hooks/useAddress'
import { cep } from '../../../../services/cep'
import {
  AddressSection,
  AddressSectionContent,
  AddressSectionHeader,
  AddressSectionTitle,
  Container,
  FirstGroup,
  SecondGroup,
} from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Container>
      <input {...props} ref={ref} />
    </Container>
  )
})

export function Address() {
  const { address, setAddress } = useAddress()
  const numberRef = createRef<HTMLInputElement>()

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setAddress((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  async function validateCEP() {
    const response = await cep.get(`/${address.cep}`)
    setAddress((prevState) => ({
      ...prevState,
      street: '...',
      neighborhood: '...',
      city: '...',
      state: '...',
    }))
    setTimeout(() => {
      setAddress((prevState) => ({
        ...prevState,
        state: response.data.state,
        city: response.data.city,
        neighborhood: response.data.neighborhood,
        street: response.data.street,
      }))
    }, 1000)
    numberRef.current?.focus()
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
          required
          name="cep"
          type="text"
          placeholder="CEP"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={8}
          value={address.cep}
          onChange={handleInputChange}
          onBlur={validateCEP}
        />
        <Input
          required
          name="street"
          type="text"
          placeholder="Rua"
          value={address.street}
          onChange={handleInputChange}
        />
        <FirstGroup>
          <Input
            required
            name="number"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="Número"
            value={address.number}
            onChange={handleInputChange}
            ref={numberRef}
          />
          <Input
            name="complement"
            type="text"
            placeholder="Complemento"
            value={address.complement}
            onChange={handleInputChange}
          />
        </FirstGroup>
        <SecondGroup>
          <Input
            required
            name="neighborhood"
            type="text"
            placeholder="Bairro"
            value={address.neighborhood}
            onChange={handleInputChange}
          />
          <Input
            required
            name="city"
            type="text"
            placeholder="Cidade"
            value={address.city}
            onChange={handleInputChange}
          />
          <Input
            required
            name="state"
            type="text"
            placeholder="UF"
            value={address.state}
            onChange={handleInputChange}
          />
        </SecondGroup>
      </AddressSectionContent>
    </AddressSection>
  )
}
