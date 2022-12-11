import axios from 'axios'

export const cep = axios.create({
  baseURL: 'https://brasilapi.com.br/api/cep/v2/',
})
