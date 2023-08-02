import styled from 'styled-components'
import media from 'styles/media'

export const TableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.x2} 0
    ${({ theme }) => theme.spacing.x2} ${({ theme }) => theme.spacing.x6};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  ${media.lessThan('mediumMobile')`
    grid-template-columns: 2fr 1fr 1fr;
    padding: ${({ theme }) => theme.spacing.x2} 0
    ${({ theme }) => theme.spacing.x2} ${({ theme }) => theme.spacing.x3};
  `}
`
