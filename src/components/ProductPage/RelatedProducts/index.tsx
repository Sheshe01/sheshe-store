import React from 'react'
import { RelatedProductsProps } from './types'
import Text from 'components/common/Text'
import ProductContainer from 'components/common/ProductContainer'
import * as Styled from './styles'

const RelatedProducts: React.FC<RelatedProductsProps> = ({ data }) => {
  return (
    <Styled.RelatedProductsContainer>
      <Text large>Produtos relacionados</Text>
      <Styled.GridProducts>
        {data.map(product => (
          <ProductContainer key={product.id} data={product} />
        ))}
      </Styled.GridProducts>
    </Styled.RelatedProductsContainer>
  )
}

export default RelatedProducts
