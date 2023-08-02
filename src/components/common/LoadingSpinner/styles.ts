import styled from 'styled-components'

export const SpinnerPosition = styled.div``
export const SpinnerContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.grey.regular};
  opacity: 0.6;
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid ${({ theme }) => theme.colors.grey.light};
  border-top: 10px solid ${({ theme }) => theme.colors.grey.dark};
  border-radius: 50%;
  animation: spinner 1.5s linear infinite;
`
