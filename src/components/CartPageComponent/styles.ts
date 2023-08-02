import styled from 'styled-components'
import media from 'styles/media'
import { Container } from 'components/structure/Container'

export const CartPageComponent = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing.x5};
  ${({ theme }) => media.lessThan('mediumMobile')`
    h1{
      font-size: ${theme.font.size.h200}
    }
  `}
`
export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  margin-top: ${({ theme }) => theme.spacing.x5};
`

export const TableContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x4};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.x4} 0;
`
