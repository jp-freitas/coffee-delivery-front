import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CartContextProvider } from './contexts/CartContext'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import ScrollToTop from './components/ScrollToTop'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <CartContextProvider>
            <ScrollToTop />
            <Router />
          </CartContextProvider>
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
