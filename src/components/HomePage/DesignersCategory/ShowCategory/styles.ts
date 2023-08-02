import styled from 'styled-components'
import media from 'styles/media'

export const ShowCategoryContainer = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-transform: uppercase;
  h4 {
    position: absolute;
  }
  ${({ theme }) => media.lessThan('mediumMobile')`
    height: 200px;
    h4{
      font-size: ${theme.font.size.h100}
    }
  `}
`
export const ContainerImage = styled.div`
  width: 100%;
  height: 420px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 12px;
  img {
    opacity: 0.5;
  }
  ${media.lessThan('mediumMobile')`
    height: 200px;
  `}
`
