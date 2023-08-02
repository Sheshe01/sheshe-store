import styled from 'styled-components'
import { Container } from 'components/structure/Container'
import media from 'styles/media'

export const DesignerContainer = styled(Container)`
  flex-direction: row;
  column-gap: 5rem;
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
    font-size: ${({ theme }) => theme.font.size.h100};
    font-weight: ${({ theme }) => theme.font.weight.light};
    line-height: 1.6;
    margin-bottom: 1rem;
    a {
      text-decoration: underline;
    }
  }
  ${media.lessThan('tablet')`
    width: 100%;
    margin-top: 0.5rem;
  `}
`

export const ContainerImage = styled.div`
  width: 100%;
  max-width: 500px;
  //height: 600px;
  overflow: hidden;
  img {
    border-radius: 12px;
  }
  ${media.lessThan('tablet')`
    width: 100%;
    max-width: 1440px;
  `}
`

export const AltImage = styled.div`
  background-color: ${({ theme }) => theme.colors.orange.extraBold};
  width: fit-content;
  position: relative;
  top: -2.2rem;
  //left: 0.5rem;
  border-radius: 12px;
  padding: 0.5rem;

  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${media.lessThan('laptop')`
    top: -2.5rem;
  `}
  ${media.lessThan('smallMobile')`
    top:-2.3rem;
    font-size: ${({ theme }) => theme.font.size.body};
  `}
`
