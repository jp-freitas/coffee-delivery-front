import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 0;
  }
`

export const ActionsContainer = styled.div`
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 0.5rem;
  }
`

export const Location = styled.span`
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};
`

export const Cart = styled.span`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`
