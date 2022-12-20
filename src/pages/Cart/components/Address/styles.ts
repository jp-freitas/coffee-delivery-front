import styled from 'styled-components'

export const AddressSection = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
  padding: 2.5rem;
`

export const Input = styled.input``

export const AddressSectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  svg {
    margin-left: 0;
    margin-right: 0.5rem;
    color: ${(props) => props.theme['yellow-900']};
  }
`

export const AddressSectionTitle = styled.div`
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

export const AddressSectionContent = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;

  > :nth-child(1) {
    width: 34%;
  }
`

export const FirstGroup = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  > :nth-child(1) {
    width: 35%;
  }

  > :nth-child(2) {
    width: 67%;
  }
`

export const SecondGroup = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  > :nth-child(1) {
    width: 35%;
  }

  > :nth-child(2) {
    width: 55%;
  }

  > :nth-child(3) {
    width: 10%;
  }
`
