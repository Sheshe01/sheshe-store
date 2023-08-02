import styled from 'styled-components'
import media from 'styles/media'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  max-width: 1220px;
  padding: 1rem 0;
  ${media.lessThan('laptop')`
    width:90%;
  `}
  ${media.lessThan('tablet')`
    width:80%;
  `}
`
