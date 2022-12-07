import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin-top: 11.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 0;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${(props) => props.theme['yellow-900']};
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
  margin-left: 0;
  margin-right: 0;
`

export const Paragraph = styled.p`
  font-size: 1.25rem;
  margin-left: 0;
  margin-right: 0;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageSection = styled.section`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 0;
  }
`
