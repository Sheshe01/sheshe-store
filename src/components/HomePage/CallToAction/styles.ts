import styled from 'styled-components'
import media from 'styles/media'

export const CallToActionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000000;
  img {
    opacity: 0.5;
  }
  ${media.lessThan('tablet')`
    height: 300px;
  `}
`
export const TextContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.orange.extraBold};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  text-align: center;
  z-index: 1000;

  ${({ theme }) => media.lessThan('mediumMobile')`
    h4{
      font-size: ${theme.font.size.h100};
    }
    p {
      font-size: ${theme.font.size.h100};
    }
  `}
`
