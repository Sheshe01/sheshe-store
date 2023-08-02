import React from 'react'
import Text from 'components/common/Text'
import colors from 'styles/theme/colors'
import useWindowSize from 'hooks/useWindowSize'
import * as Styled from './styles'

const TableHeader: React.FC = () => {
  const { isMobileDevice } = useWindowSize()
  return (
    <Styled.TableHeader>
      <Text body color={colors.black}>
        item
      </Text>
      <Text body color={colors.black}>
        Preço
      </Text>
      <Text body color={colors.black}>
        Quantidade
      </Text>
      {isMobileDevice ? null : (
        <Text body color={colors.black}>
          Subtotal
        </Text>
      )}
    </Styled.TableHeader>
  )
}

export default TableHeader
