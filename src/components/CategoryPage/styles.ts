import styled from 'styled-components'
import media from 'styles/media'

export const CategoryPageContainer = styled.div`
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
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing.x5};
  button {
    width: 200px;
  }
`

export const ContainerNotFound = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.x5};
  display: flex;
  align-items: center;
  justify-content: center;
`
