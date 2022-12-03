import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 700;
  color: ${(props) => props.theme['gray-800']};
`

export const CardList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  gap: 2.5rem 2rem;
`
