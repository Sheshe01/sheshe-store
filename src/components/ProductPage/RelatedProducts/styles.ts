import styled from 'styled-components'
import media from 'styles/media'

export const RelatedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: ${({ theme }) => theme.spacing.x4};
  margin-top: ${({ theme }) => theme.spacing.x4};
`
export const GridProducts = styled.div`
  display: grid;
  grid-template-columns: 320px 320px 320px;
  column-gap: 130px;
  ${media.lessThan('laptop')`
    justify-content:center;
    grid-template-columns: 320px 320px;
  `}
  ${media.lessThan('tablet')`
    grid-template-columns: 220px 220px;
  `}
  ${media.lessThan('mobile')`
    grid-template-columns: 256px;
  `}
`
