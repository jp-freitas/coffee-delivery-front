import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['gray-200']};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    position: relative;
    bottom: 15%;
  }
`

export const CardContent = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const TagSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Tag = styled.span`
  margin-top: -1.75rem;
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-900']};
  border-radius: 6.25rem;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
`

export const Title = styled.h1`
  margin-top: 0.5rem;
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme['gray-800']};
`

export const Description = styled.p`
  margin-top: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-600']};
  text-align: center;
`

export const BuySection = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`

export const BuyButton = styled.button`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.375rem;
  background: ${(props) => props.theme['purple-900']};
  color: ${(props) => props.theme.white};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const Prefix = styled.p`
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme['gray-700']};
`

export const Amount = styled.span`
  margin-left: 0.25rem;
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme['gray-700']};
`

export const Count = styled.span`
  width: 100%;
  margin-left: 1.4375rem;
  margin-right: 0.5rem;
  padding: 0.53125rem 0.5rem;
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
