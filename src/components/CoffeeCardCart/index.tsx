import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ActionContainer,
  Amount,
  Container,
  Count,
  InfoContainer,
  InfoContent,
  MinusContainer,
  Name,
  Number,
  PlusContainer,
  RemoveButton,
} from './styles'

import express from '../../assets/coffee-express.svg'

export function CoffeeCardCart() {
  return (
    <Container>
      <InfoContainer>
        <img src={express} alt="" />
        <InfoContent>
          <Name>Expresso Tradicional</Name>
          <ActionContainer>
            <Count>
              <MinusContainer>
                <Minus size={14} weight="bold" />
              </MinusContainer>
              <Number>2</Number>
              <PlusContainer>
                <Plus size={14} weight="bold" />
              </PlusContainer>
            </Count>
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionContainer>
        </InfoContent>
      </InfoContainer>
      <Amount>{`R$ ${parseFloat(String(19.8)).toFixed(2)}`}</Amount>
    </Container>
  )
}
