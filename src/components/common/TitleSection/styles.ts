import styled from 'styled-components'
import media from 'styles/media'

export const StyledLink = styled.a`
  width: fit-content;
  font-size: ${({ theme }) => theme.font.size.h400};
  font-weight: ${({ theme }) => theme.font.weight.light};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.orange.extraBold};
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  :hover,
  :focus {
    border-color: ${({ theme }) => theme.colors.orange.extraBold};
  }
  ${({ theme }) => media.lessThan('mediumMobile')`
    font-size: ${theme.font.size.h100}
  `}
`
