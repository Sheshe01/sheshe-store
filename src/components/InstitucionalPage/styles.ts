import styled from 'styled-components'
import { Container } from 'components/structure/Container'
import media from 'styles/media'

export const ContactContainer = styled(Container)`
  flex-direction: row;
  column-gap: 5rem;
  justify-content: center;
  align-items: center;
  ${media.lessThan('tablet')`
    flex-direction: column;
  `}
`
export const TextContainer = styled.div`
  width: 90%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 1rem;
    b {
      font-weight: bold;
    }
  }
  ${media.lessThan('tablet')`
    width: 100%;
    margin-top: 2rem;
  `}
`

export const ContainerImage = styled.div`
  width: 100%;
  max-width: 392px;
  height: 369px;
  img {
    margin-top: 2rem;
  }
  ${media.lessThan('tablet')`
    width: 100%;
    height: auto;
  `}
`
