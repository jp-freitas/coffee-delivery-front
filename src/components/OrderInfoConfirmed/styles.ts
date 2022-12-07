import styled from 'styled-components'

export const InfoSection = styled.section`
  margin-top: 2.5rem;
  width: 40%;
  margin-left: 0;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background: linear-gradient(
        ${(props) => props.theme['gray-100']},
        ${(props) => props.theme['gray-100']}
      )
      padding-box,
    linear-gradient(
        35deg,
        ${(props) => props.theme['yellow-900']},
        ${(props) => props.theme['yellow-500']},
        ${(props) => props.theme['purple-900']},
        ${(props) => props.theme['purple-500']}
      )
      border-box;
  border: 1px solid transparent;
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
`

export const AddressInformation = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme.white};
    border-radius: 99px;
  }

  p {
    margin-left: 0;
    width: 100%;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-700']};

    > span {
      font-size: 1rem;
      font-weight: 700;
    }
  }
`

export const DeliveryInformation = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-500']};
    color: ${(props) => props.theme.white};
    border-radius: 99px;
  }

  p {
    width: 100%;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
  }
`

export const PaymentInformation = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-900']};
    color: ${(props) => props.theme.white};
    border-radius: 99px;
  }

  p {
    width: 100%;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-700']};
  }

  span {
    width: 100%;
    font-size: 1rem;
    font-weight: 700;
  }
`
