import React from 'react'
import { GiPadlock } from 'react-icons/gi'
import Text from 'components/common/Text'
import * as Styles from './styles'

const SecurityIcon = () => {
  return (
    <Styles.Container>
      <Text small>Ambiente seguro</Text>
      <GiPadlock />
    </Styles.Container>
  )
}

export default SecurityIcon
