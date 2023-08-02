import React from 'react'
import Header from 'components/structure/Header'
import Footer from 'components/structure/Footer'
import { MenuContextProvider } from 'context/MenuContext'
import { CartContextProvider } from 'context/CartContext'
import { LayoutProps } from './types'
import { LayoutContainer, Main } from './styles'
import { CheckoutContextProvider } from 'context/CheckoutContext'

const Layout: React.FC<LayoutProps> = ({
  children,
  categories,
  isCategoryPage = false,
  categoryFound,
  isProductPage = false
}) => {
  return (
    <LayoutContainer>
      <Header
        categories={categories}
        isCategoryPage={isCategoryPage}
        categoryFound={categoryFound}
        isProductPage={isProductPage}
      />

      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  )
}

export default Layout
