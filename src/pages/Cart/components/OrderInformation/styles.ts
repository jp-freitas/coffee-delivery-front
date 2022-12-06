import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
  padding: 2.5rem;
`

export const ItemsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`

export const Resume = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;

  p {
    margin-left: 0;
    font-size: 0.875rem;
  }

  span {
    margin-right: 0;
    font-size: 1rem;
  }
`

export const Items = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Delivery = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Total = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 0;
    font-size: 1.25rem;
    font-weight: 700;
  }

  span {
    margin-right: 0;
    font-size: 1.25rem;
    font-weight: 700;
  }
`

export const ButtonConfirmation = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
  padding: 0.75rem 0.5rem;
`
