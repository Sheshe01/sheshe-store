import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsHandbag } from 'react-icons/bs'
import useWindowSize from 'hooks/useWindowSize'
import Logotipo from 'assets/images/logotipo.png'
import colors from 'styles/theme/colors'
import Text from 'components/common/Text'

import {
  ImageContainer,
  CartContainer,
  TopMenuContainer,
  QuantityProductsInCart
} from './styles'
import { useCartContext } from 'context/CartContext'

type TopMenuProps = {
  isCollapsed?: boolean
  color?: string
}
const TopMenu: React.FC<TopMenuProps> = ({ color }) => {
  const { shoppingCart, quantityItemsInCart } = useCartContext()
  const { isMobileDevice } = useWindowSize()

  return (
    <TopMenuContainer>
      {isMobileDevice ? null : (
        <ImageContainer>
          <Link href="/" passHref>
            <a>
              <Image
                quality={100}
                src={Logotipo}
                alt="Logotipo Sheshe"
                width="200"
                height="69"
              />
            </a>
          </Link>
        </ImageContainer>
      )}
      <CartContainer>
        <Link href="/cart" passHref>
          <a>
            <BsHandbag size={20} color={color || colors.black} />
            {shoppingCart && shoppingCart.length > 0 ? (
              <QuantityProductsInCart>
                <Text small color={colors.white}>
                  {quantityItemsInCart}
                </Text>
              </QuantityProductsInCart>
            ) : null}
          </a>
        </Link>
      </CartContainer>
    </TopMenuContainer>
  )
}

export default TopMenu
