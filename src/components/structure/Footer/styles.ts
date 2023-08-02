import styled, { css } from 'styled-components'
import media from 'styles/media'
import { Container } from 'components/structure/Container'
import Text from 'components/common/Text'

export const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0 auto 0 auto;
  padding: 2rem 0 0 0;
`

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 425px;
  column-gap: 2rem;
  justify-content: stretch;
  align-items: stretch;
  ${media.lessThan('tablet')`
    justify-content: center;
  `}
  ${media.lessThan('mediumMobile')`
    padding: ${({ theme }) => theme.spacing.x8} 0 ${({ theme }) =>
    theme.spacing.x4} 0;
    flex-direction: column;
  `}
`
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x2};
  margin: auto 0 auto 0;

  a {
    align-items: center;
    text-align: center;
  }
  ${media.lessThan('mediumMobile')`

    margin: ${({ theme }) => theme.spacing.x6} auto 0 auto;
  `}
`
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  ${media.lessThan('tablet')`
    margin-left: 0;
  `}
  ${media.lessThan('mediumMobile')`
    padding: 0;
    margin:0 auto;
  `}
`
export const InputElement = styled.input`
  height: 40px;
  border-color: ${({ theme }) => theme.colors.grey.regular};
`
export const ButtonElement = styled.button`
  height: 40px;
  background-color: ${({ theme }) => theme.colors.orange.extraBold};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  :hover,
  :focus {
    opacity: 0.8;
  }
`
export const FooterCopyright = styled(Container)`
  margin: 1rem auto 0 auto;
  padding-bottom: ${({ theme }) => theme.spacing.x2};
`
export const Copyright = styled(Text)`
  margin: 0 auto;
`
export const Links = styled.div`
  display: flex;
  justify-content: center;
  column-gap: ${({ theme }) => theme.spacing.x4};
  margin-top: ${({ theme }) => theme.spacing.x3};
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin-top: 1rem;
`
