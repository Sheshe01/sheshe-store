import styled from 'styled-components'

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
`

export const Select = styled.select`
  width: 100%;
  height: 40px;
  margin: 0.5rem 0;
  padding: 0 1rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.grey.regular};

  line-height: 17px;
  color: rgba(#16171b, 0.5);

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.orange.extraBold};
  }

  &--error {
    border-color: ${({ theme }) => theme.colors.orange.dark};
  }
`

export const Label = styled.div`
  font-size: 14px;
  text-align: left;
`
