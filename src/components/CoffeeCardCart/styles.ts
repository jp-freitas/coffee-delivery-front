import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme['gray-400']};
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25%;
    margin-left: 0;
  }
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Name = styled.h1`
  margin-left: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme['gray-800']};
  margin-bottom: 0.5rem;
`

export const ActionContainer = styled.div`
  margin-left: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Count = styled.span`
  margin-left: 0rem;
  margin-right: 0.5rem;
  padding: 0.4rem 0.5rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 0.375rem;
  font-size: 1rem;
`

export const Number = styled.p`
  margin: 0 0.5rem;
`

export const MinusContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s;
  color: ${(props) => props.theme['purple-500']};
  &:hover {
    color: ${(props) => props.theme['purple-900']};
  }
`

export const PlusContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color 0.3s;
  color: ${(props) => props.theme['purple-500']};

  &:hover {
    color: ${(props) => props.theme['purple-900']};
  }
`

export const RemoveButton = styled.button`
  margin-right: 0;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  background: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-700']};
  border: 0;
  border-radius: 0.375rem;
  cursor: pointer;
  padding: 0.53125rem 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  svg {
    margin-right: 0.25rem;
    color: ${(props) => props.theme['purple-500']};
  }
`

export const Amount = styled.span`
  width: 20%;
  margin-bottom: 2.8rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props) => props.theme['gray-700']};
`
