import styled from 'styled-components'
import { Container } from 'components/structure/Container'
import media from 'styles/media'

export const PersonalDataContainer = styled(Container)`
  ${media.lessThan('mediumMobile')`
    width:100%;
  `}
`

export const FormSection = styled.div`
  display: flex;
  column-gap: 2rem;
`
