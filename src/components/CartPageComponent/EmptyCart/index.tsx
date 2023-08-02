import React from 'react'
import { BsBagX } from 'react-icons/bs'
import colors from 'styles/theme/colors'
import Text from 'components/common/Text'
import * as Styled from './styles'

const EmptyCart: React.FC = () => {
  return (
    <Styled.EmptyCart>
      <BsBagX size={100} />
      <Text large color={colors.black}>
        Seu carrinho está vazio.
      </Text>
    </Styled.EmptyCart>
  )
}
export default EmptyCart
