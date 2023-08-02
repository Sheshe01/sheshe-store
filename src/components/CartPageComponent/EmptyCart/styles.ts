import styled from 'styled-components'

export const EmptyCart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x4};
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.x5};
`
