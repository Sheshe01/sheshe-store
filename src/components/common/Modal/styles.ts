import styled from 'styled-components'

export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;
  text-transform: uppercase;
  button {
    margin-left: auto;
    width: 40px;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.orange.extraBold};
  }
`

export const Select = styled.select`
  width: 100%;
`

export const TextModal = styled.div`
  p {
    margin-top: 0.5rem;
  }
  button {
    margin-top: 0.5rem;
    max-width: 100px;
  }
`
