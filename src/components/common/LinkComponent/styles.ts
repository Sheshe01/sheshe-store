import styled from 'styled-components'
import media from 'styles/media'

export const StyledLink = styled.a<{ withArrow?: boolean }>`
  /* display: flex; */
  text-transform: uppercase;
  align-items: center;
  column-gap: 0.2rem;
  font-size: ${({ theme }) => theme.font.size.body};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid transparent;
  :hover,
  :focus {
    border-color: ${({ theme }) => theme.colors.orange.extraBold};
    svg {
      //transform: rotate(180deg);
    }
  }
  ${media.lessThan('tablet')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
 `}
  ${({ withArrow }) => `
    ${
      withArrow &&
      `
      display: flex;
   `
    }
  `}
`
