import styled from 'styled-components'

export const TabList = styled.ul`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing.x4};
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey.regular};
`
