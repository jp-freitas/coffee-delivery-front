import styled from 'styled-components'

export const Container = styled.div`
  width: 74rem;
  z-index: 1;
  height: 6.5rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['gray-100']};

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

  p {
    color: ${(props) => props.theme['purple-900']};
  }
`

export const Cart = styled.span`
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`
