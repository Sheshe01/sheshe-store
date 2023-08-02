import { Container } from 'components/structure/Container'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import media from 'styles/media'

export const MenuContainer = styled(Container)`
  ${media.lessThan('tablet')`
    margin:0 auto;
 `}
`
export const List = styled.ul`
  width: 100%;
  display: flex;
  column-gap: 2rem;
  ${({ theme }) => media.lessThan('tablet')`
    flex-direction: column;
    row-gap: ${theme.spacing.x4};
 `}
`
export const ListItem = styled.li<{ linkColor?: string }>`
  ${({ linkColor }) => `
    ${
      linkColor &&
      `
        a{
          color: ${linkColor};
        }
      `
    }
  `}
`

export const ListItemSubmenu = styled(motion.ul)`
  position: absolute;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
  transform-origin: 50% -30px;
  top: 170px;
`

export const ListItemSubmenuMobile = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spacing.x4} 0 0
    ${({ theme }) => theme.spacing.x3};
`
