import styled from 'styled-components'

export const TabListItem = styled.li<{ isItemActive: boolean }>`
  position: relative;
  bottom: -1px;
  padding: ${({ theme }) => theme.spacing.x2} ${({ theme }) => theme.spacing.x3};
  border: 1px solid transparent;
  border-bottom: none;

  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.orange.extraBold};
  }
  h1 {
    font-size: ${({ theme }) => theme.font.size.large};
  }

  ${({ theme, isItemActive }) => `
    ${
      isItemActive &&
      `
      border-color: ${theme.colors.grey.regular};
      border-radius: 5px 5px 0 0;
      background: #fff;
      color: ${theme.colors.orange.extraBold};
   `
    }
  `}
`
