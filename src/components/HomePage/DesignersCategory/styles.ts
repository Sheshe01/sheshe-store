import { Container } from 'components/structure/Container'
import styled from 'styled-components'
import media from 'styles/media'

export const DesignersCategoryContainer = styled(Container)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.x4};
  padding-bottom: 0;
  ${media.lessThan('tablet')`
    width: 80%;
  `}
`
export const GridCategories = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: 420px 420px;
  grid-template-areas:
    'category-1 category-2'
    'category-3 category-3';
  grid-gap: 3.75rem;
  margin: ${({ theme }) => theme.spacing.x6} auto;
  a {
    :hover,
    :focus {
      img {
        transform: scale(1.1);
      }
    }
  }
  ${media.lessThan('tablet')`
    grid-template-columns: 420px;
    grid-template-areas:
      'category-1'
      'category-2'
      'category-3';
  `}
  ${({ theme }) => media.lessThan('mediumMobile')`
    grid-template-columns: 200px;
    grid-gap: ${theme.spacing.x4};

  `}
`
