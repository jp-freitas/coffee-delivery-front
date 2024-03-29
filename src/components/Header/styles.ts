import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  z-index: 1;
  height: 6.5rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['gray-100']};
`

export const Content = styled.div`
  width: 74rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-left: 0;
  }

  img {
    margin-left: 0;
    cursor: pointer;
  }

  nav {
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      padding: 0.5rem;
    }
  }
`

export const Location = styled.span`
  margin-right: 0.5rem;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};

  p {
    color: ${(props) => props.theme['purple-900']};
  }
`

export const Cart = styled.span`
  cursor: pointer;
  position: relative;
  margin-right: 0;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};

  > span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: -10px;
    right: -10px;
    padding: 0.5rem !important;
    border-radius: 100% !important;
    background: ${(props) => props.theme['yellow-900']};
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-weight: 700;
  }
`
