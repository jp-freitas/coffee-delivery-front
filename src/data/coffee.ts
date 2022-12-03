import { v4 as uuidv4 } from 'uuid'

import express from '../assets/coffee-express.svg'
import americanExpress from '../assets/coffee-american-express.svg'
import creamyExpress from '../assets/coffee-creamy-express.svg'
import icedExpress from '../assets/coffee-iced-express.svg'
import milky from '../assets/coffee-milky.svg'
import latte from '../assets/coffee-latte.svg'
import capuccino from '../assets/coffee-capuccino.svg'
import macchiato from '../assets/coffee-macchiato.svg'
import mocaccino from '../assets/coffee-mocaccino.svg'
import hotChocolate from '../assets/hot-chocolate.svg'
import cuban from '../assets/coffee-cuban.svg'
import hawaiian from '../assets/coffee-hawaiian.svg'
import arabic from '../assets/coffee-arabic.svg'
import irish from '../assets/coffee-irish.svg'

export const Coffees = [
  {
    id: uuidv4(),
    image: express,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: americanExpress,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: creamyExpress,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: icedExpress,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: milky,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leito vaporizado',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: capuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café leite e espuma',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: mocaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: hotChocolate,
    tags: ['tradicional', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: cuban,
    tags: ['especial', 'alcóolico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: hawaiian,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: arabic,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    amount: 9.9,
  },
  {
    id: uuidv4(),
    image: irish,
    tags: ['expecial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açucar e chantilly',
    amount: 9.9,
  },
]
