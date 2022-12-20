import styled from 'styled-components'

export const PaymentMethod = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10rem;
`

export const PaymentMethodHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  svg {
    margin-left: 0;
    margin-right: 0.5rem;
    color: ${(props) => props.theme['purple-500']};
  }
`

export const PaymentMethodTitle = styled.div`
  margin-left: 0;
  margin-right: 0;

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.875rem;
  }
`

export const PaymentMethodContent = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 0.75rem;
`

interface BasePaymentMethodButtonProps {
  isActive: boolean
}

export const BasePaymentMethodButton = styled.button<BasePaymentMethodButtonProps>`
  width: 100%;
  padding: 0.875rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-color: ${(props) =>
    props.isActive ? props.theme['purple-500'] : 'transparent'};
  border-radius: 0.375rem;
  background: ${(props) =>
    props.isActive ? props.theme['purple-100'] : props.theme['gray-400']};
  color: ${(props) => props.theme['gray-800']};
  font-size: 0.75rem;
  line-height: 160%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none !important;
  }

  svg {
    margin-bottom: 0.1rem;
    margin-right: 0.5rem;
    margin-left: 0;
    color: ${(props) => props.theme['purple-500']};
  }
`
