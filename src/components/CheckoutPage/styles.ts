import styled from 'styled-components'
import media from 'styles/media'

export const ButtonsContainer = styled.div`
  width: 30%;
  display: flex;
  margin: 2rem auto 0 auto;
  column-gap: 0.2rem;
  ${media.lessThan('mediumMobile')`
    width:100%;
  `}
`

export const Form = styled.div`
  width: 90%;
  margin: 2rem auto;
  ${media.lessThan('mediumMobile')`
    width:100%;
  `}
`
