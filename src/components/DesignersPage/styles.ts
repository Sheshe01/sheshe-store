import styled from 'styled-components'
import { Container } from 'components/structure/Container'
import media from 'styles/media'

export const DesignersContainer = styled(Container)`
  text-transform: uppercase;
  margin-bottom: 5rem;
`

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
  margin: auto;
  ${media.lessThan('tablet')`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${media.lessThan('mobile')`
    grid-gap: 5rem;
    grid-template-columns: repeat(1, 1fr);
  `}
`

export const Card = styled.div`
  width: 300px;
  height: 450px;
  margin: 0 auto;
  img {
    border-radius: 12px;
  }
  text-align: center;
  p {
    margin-top: 1rem;
  }
  ${media.lessThan('tablet')`
    width: 200px;
    height: 299px;
  `}
  ${media.lessThan('mobile')`
    width: 150px;
    height: 224px;
  `}
`
