import React from 'react'
import { useCheckoutContext } from 'context/CheckoutContext'
import Text from '../../../common/Text'
import { Container } from 'components/structure/Container'
import * as Styled from './styles'
import LinkComponent from 'components/common/LinkComponent'

const SuccessMessage: React.FC = () => {
  const { name, orderId } = useCheckoutContext()
  return (
    <Container>
      <Styled.ContainerMessage>
        <Text heading={200}>
          {' '}
          Olá {name}, Recebemos o seu pedido com o número #{orderId}
        </Text>
        <LinkComponent href="/">Voltar para Home</LinkComponent>
      </Styled.ContainerMessage>
    </Container>
  )
}

export default SuccessMessage
