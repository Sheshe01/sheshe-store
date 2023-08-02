import styled from 'styled-components'
import media from 'styles/media'

export const TableLine = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.2fr 2fr 1fr 1fr 1fr;
  ${media.lessThan('mediumMobile')`
    grid-template-columns: 0.3fr 2fr 1.5fr 1fr;
  `}
`
export const ProductItem = styled.div`
  width: 100%;
  display: flex;
  column-gap: ${({ theme }) => theme.spacing.x4};
  justify-content: center;
  align-items: center;
`

export const ContainerImage = styled.div`
  position: relative;
  width: 130px;
  height: 152px;
  ${media.lessThan('mediumMobile')`
    width: 70px;
    height: 80px;
  `}
`
export const ContainerProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x2};
`
export const ShowOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: ${({ theme }) => theme.spacing.x1};
`
export const ColumnTable = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing.x1};
  input {
    width: 20%;
  }
  ${media.lessThan('mediumMobile')`
    input {
      width: 40%;
    }
  `}
`

export const Remove = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    cursor: pointer;
    border: 1px solid transparent;
    :hover,
    :focus {
      border-color: ${({ theme }) => theme.colors.orange.extraBold};
    }
  }
`
