import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import {
  AdvantagesItem,
  AdvantagesSection,
  HomeContainer,
  ImageSection,
  InfoSection,
  MainContainer,
} from './styles'
import IntroSectionImage from '@/assets/image-intro-section.svg'
import { CoffeeList } from './components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <MainContainer>
        <InfoSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <AdvantagesSection>
            <div>
              <AdvantagesItem itemColor="gold">
                <span>
                  <ShoppingCart size={18} weight="fill" />
                </span>
                Compra simples e segura
              </AdvantagesItem>
              <AdvantagesItem itemColor="yellow">
                <span>
                  <Timer size={18} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </AdvantagesItem>
            </div>
            <div>
              <AdvantagesItem itemColor="black">
                <span>
                  <Package size={18} weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </AdvantagesItem>
              <AdvantagesItem itemColor="purple">
                <span>
                  <Coffee size={18} weight="fill" />
                </span>
                O café chega fresquinho até você
              </AdvantagesItem>
            </div>
          </AdvantagesSection>
        </InfoSection>
        <ImageSection>
          <img
            src={IntroSectionImage}
            alt="Imagem criada digitalmente de um copo com café"
          />
        </ImageSection>
      </MainContainer>
      <CoffeeList />
    </HomeContainer>
  )
}
