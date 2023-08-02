import React from 'react'

import { ButtonElementProps } from './types'
import { Container } from './styles'

const ButtonElement: React.FC<ButtonElementProps> = ({
  children,
  handleClick,
  disabled = false
}) => {
  return (
    <Container disabled={disabled} onClick={handleClick}>
      {children}
    </Container>
  )
}

export default ButtonElement
