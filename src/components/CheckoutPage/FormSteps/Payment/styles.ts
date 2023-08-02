import styled from 'styled-components'
import { Container } from 'components/structure/Container'

export const CardInputWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.grey.regular};

  /* line-height: 17px;
  color: rgba(#16171b, 0.5); */

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.orange.extraBold};
  }

  &--error {
    border-color: ${({ theme }) => theme.colors.orange.dark};
  }
`
export const ErrorMessage = styled.div<{ isDisplayNone: boolean }>`
  color: #fa004f;
  padding: 8px;
  margin-bottom: 0.5rem;
  ${({ isDisplayNone }) => `
    ${
      isDisplayNone
        ? `
        display: none;
      `
        : `display: visible;`
    }
  `}
`

export const PaymentForm = styled.form`
  width: 100%;
  margin: 0 auto;
  /* border: 1px;
  border-radius: 10px; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
`

export const Payment = styled.div`
  width: 100%;
`

export const Buttons = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
`
