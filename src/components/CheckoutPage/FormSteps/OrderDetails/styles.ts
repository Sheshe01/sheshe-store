import styled from 'styled-components'
import { Container } from 'components/structure/Container'
import media from 'styles/media'

export const OrderDetails = styled(Container)`
  max-width: 1024px;
  flex-direction: row;
  margin: 0 auto;
  column-gap: 2rem;
  ${media.lessThan('mediumMobile')`
    flex-direction: column;
  `}
`

export const OrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 100%;
  max-width: 768px;
  margin: 0 auto 2rem auto;
`

export const OrderListProducts = styled.div`
  width: 100%;
  display: flex;
  column-gap: 0.5rem;
`

export const OrderPayment = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`

export const OrderListProductsImage = styled.div`
  position: relative;
  width: 110px;
  height: 132px;
`

export const OrderListProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 0.5rem;
`

export const OrderTotal = styled.div`
  width: 100%;
`
