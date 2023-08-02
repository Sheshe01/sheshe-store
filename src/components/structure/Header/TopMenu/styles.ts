import styled from 'styled-components'
import { Container } from 'components/structure/Container'
import media from 'styles/media'

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
`
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  a {
    border: 1px solid transparent;
    :hover,
    :focus {
      outline: 1;
      border-color: ${({ theme }) => theme.colors.orange.extraBold};
    }
  }
`
export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  a {
    display: flex;
    column-gap: ${({ theme }) => theme.spacing.x1};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.black};
    :hover,
    :focus {
      border-color: ${({ theme }) => theme.colors.orange.extraBold};
    }
  }
  ${media.lessThan('tablet')`
    justify-content: flex-start;
 `}
`

export const TopMenuContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  ${media.lessThan('tablet')`
    margin: 0 auto;
 `}
`
export const QuantityProductsInCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.orange.extraBold};
`
