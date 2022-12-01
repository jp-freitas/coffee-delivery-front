import { Advantages, HomeContainer, ImageSection, InfoSection } from './styles'
import IntroSectionImage from '../../assets/image-intro-section.svg'
import { ShoppingCart } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <InfoSection>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <Advantages>
          <div>
            <p>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </Advantages>
      </InfoSection>
      <ImageSection>
        <img
          src={IntroSectionImage}
          alt="Imagem criada digitalmente de um copo com café"
        />
      </ImageSection>
    </HomeContainer>
  )
}
