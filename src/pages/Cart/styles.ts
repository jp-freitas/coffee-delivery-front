import styled from 'styled-components'

export const Container = styled.div`
  width: 74rem;
  margin-top: 6.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`

export const CompleteOrder = styled.section`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    font-weight: 1.125rem;
    line-height: 130%;
    margin-left: 0;
    margin-bottom: 0.973rem;
  }
`

export const OrderInformationContainer = styled.section`
  width: 40%;
  height: 100%;

  > h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 1rem;
    font-weight: 1.125rem;
    line-height: 130%;
    margin-bottom: 0.973rem;
  }
`
