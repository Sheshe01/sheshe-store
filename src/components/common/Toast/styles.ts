import styled from 'styled-components'

export const ReactToast = styled.div<{ isOpen: boolean }>`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Arial, Helvetica, sans-serif;
  width: calc(100vw - 20px);
  min-height: 60px;
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  bottom: 10px;
  right: -100vw;
  transition: right 1s ease-in;
  z-index: 100000;
  line-height: 1.25;
  padding: 10px 10px 10px 6px;
  text-align: left;
  color: #333;
  border-left: 12px ${({ theme }) => theme.colors.orange.extraBold} solid;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  letter-spacing: -0.5px;
  box-sizing: border-box;
  :hover {
    cursor: default;
  }
  ${({ isOpen }) => `
    ${
      isOpen &&
      `
        transition: right 1s ease-out;
        right: 10px;
      `
    }
  `}
`
