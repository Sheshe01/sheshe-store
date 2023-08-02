import React from 'react'
import Text from '../Text'
import * as Styled from './styles'

const CheckoutProgressBar: React.FC<{ label: string; step: number }> = ({
  label,
  step
}) => {
  return (
    <Styled.Container>
      <Styled.ProgressBar step={step} />
      <Styled.LabelBar step={step}>
        <Text body>{label}</Text>
      </Styled.LabelBar>
    </Styled.Container>
  )
}

export default CheckoutProgressBar
