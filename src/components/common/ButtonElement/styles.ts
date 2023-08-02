import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.orange.extraBold};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  :hover,
  :focus {
    opacity: 0.8;
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }
`
