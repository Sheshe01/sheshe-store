import styled from 'styled-components'
import media from 'styles/media'

export const ShowProductContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 560px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.x4};
  ${media.lessThan('tablet')`
    height:auto;
    margin-bottom: ${({ theme }) => theme.spacing.x8};
  `}
`

export const ContainerImage = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.x4};
  a {
    :hover,
    :focus {
      img {
        transform: scale(1.1);
      }
    }
  }
`
