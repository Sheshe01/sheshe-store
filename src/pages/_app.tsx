import React from 'react'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import theme from 'styles/theme'
import { CartContextProvider } from 'context/CartContext'
import { CheckoutContextProvider } from 'context/CheckoutContext'
import { MenuContextProvider } from 'context/MenuContext'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <CheckoutContextProvider>
          <MenuContextProvider>
            <Component {...pageProps} />
            <GlobalStyle />
          </MenuContextProvider>
        </CheckoutContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
