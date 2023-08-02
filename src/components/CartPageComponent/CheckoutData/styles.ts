import styled from 'styled-components'
import media from 'styles/media'
import { Container } from 'components/structure/Container'

export const CartCheckoutData = styled.div`
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-top: ${({ theme }) => theme.spacing.x4};
  padding: ${({ theme }) => theme.spacing.x4} 0;
  button {
    margin-top: ${({ theme }) => theme.spacing.x4};
  }
`
export const LineInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: ${({ theme }) => theme.spacing.x1} 0;
  button {
    margin-top: 0;
    width: 150px;
    height: 25px;
  }
`
