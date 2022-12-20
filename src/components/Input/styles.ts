import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-left: 0;

  input {
    width: 100%;
    margin-left: 0;
    padding: 0.75rem;
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-800']};
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 0.25rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }

    :nth-child(2) {
      width: 100%;
    }
  }

  span {
    margin-left: -3.9rem;
    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-600']};
  }
`
