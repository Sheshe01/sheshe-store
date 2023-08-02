import React from 'react'
import Text from 'components/common/Text'
import { ProductModel } from 'domain/models'
import { useCartContext } from 'context/CartContext'
import colors from 'styles/theme/colors'
import CartTable from './CartTable'
import TableHeader from './TableHeader'
import CheckoutData from './CheckoutData'
import EmptyCart from './EmptyCart'
import { CartPageComponentProps } from './types'
import * as Styled from './styles'

const CartPageComponent: React.FC<CartPageComponentProps> = ({ products }) => {
  const { shoppingCart } = useCartContext()

  return (
    <Styled.CartPageComponent>
      <Text as="h1" heading={500} color={colors.orange.extraBold}>
        Carrinho de compras
      </Text>
      {shoppingCart && shoppingCart.length > 0 ? (
        <Styled.GridContainer>
          <TableHeader />
          <Styled.TableContent>
            {shoppingCart.map(productInCart => {
              const queryProductInCart = products.find(
                item => item.id === productInCart.product_id
              )
              return (
                <CartTable
                  key={productInCart.id}
                  cartItem={productInCart}
                  queryProductInCart={queryProductInCart as ProductModel}
                />
              )
            })}
          </Styled.TableContent>
          <CheckoutData />
        </Styled.GridContainer>
      ) : (
        <EmptyCart />
      )}
    </Styled.CartPageComponent>
  )
}

export default CartPageComponent
