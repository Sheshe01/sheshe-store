import React from 'react'
import { useRouter } from 'next/router'
import Text from 'components/common/Text'
import ButtonElement from 'components/common/ButtonElement'
import { formatPrice } from 'utils/helpers'
import { useCartContext } from 'context/CartContext'
import * as Styled from './styles'
import Modal from 'components/common/Modal'

const CheckoutData: React.FC = () => {
  const router = useRouter()
  const {
    totalCartPrice,
    setModalIsOpen,
    totalCartPriceWithFreight,
    freightPrice
  } = useCartContext()

  const handleButtonClick = () => {
    router.push('/checkout')
  }

  return (
    <>
      <Styled.CartCheckoutData>
        <Styled.LineInfo>
          <Text body>Subtotal</Text>
          <Text body>{formatPrice(totalCartPrice)}</Text>
        </Styled.LineInfo>
        <Styled.LineInfo>
          <ButtonElement handleClick={() => setModalIsOpen(true)}>
            Calcular frete
          </ButtonElement>
          <Text body>{formatPrice(freightPrice)}</Text>
        </Styled.LineInfo>
        <Styled.LineInfo>
          <Text body>Total</Text>
          <Text body>{formatPrice(totalCartPriceWithFreight)}</Text>
        </Styled.LineInfo>
        <ButtonElement handleClick={handleButtonClick}>
          Finalizar compra
        </ButtonElement>
      </Styled.CartCheckoutData>
      <Modal />
    </>
  )
}

export default CheckoutData
