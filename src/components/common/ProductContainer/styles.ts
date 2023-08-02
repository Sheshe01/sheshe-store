import styled from 'styled-components'
import media from 'styles/media'

export const Container = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  margin: ${({ theme }) => theme.spacing.x4} 0;
  ${media.lessThan('tablet')`
    height:auto;
    margin-bottom: ${({ theme }) => theme.spacing.x8};
  `}
`

export const ContainerImage = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.x4};
  img,
  span {
    border: none;
    border-radius: 20px;
  }
  a {
    :hover,
    :focus {
      img {
        transform: scale(1.1);
      }
    }
  }
`
