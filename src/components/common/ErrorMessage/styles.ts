import styled from 'styled-components'

export const ErrorMessageUL = styled.ul<{ isHidden?: boolean }>`
  width: 100%;
`

export const ErrorMessageLI = styled.li`
  width: 100%;
  padding: 0.2rem 24px;
  margin: 0 0 0.5rem 0;

  display: flex;
  align-items: center;
  text-align: left;

  border-radius: 0.25rem;

  font-size: 12px;
  line-height: 12px;
  color: ${({ theme }) => theme.colors.orange.dark};
`
