import styled from 'styled-components'

export const NewPartsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x6};
  justify-content: center;
  align-items: stretch;
  margin-top: ${({ theme }) => theme.spacing.x5};
  .splide__pagination {
    button {
      background-color: ${({ theme }) => theme.colors.orange.extraBold};
    }
  }
`
