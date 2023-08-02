import styled from 'styled-components'
import media from 'styles/media'

export const SlideContent = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 178px);
  display: flex;
  overflow: hidden;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.x4};
  align-items: center;
  justify-content: center;
  background: #000000;
  img {
    opacity: 0.5;
  }
  ${media.lessThan('mediumMobile')`
    height: 300px;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 178px);
  background: #000000;
  overflow: hidden;
  .splide__arrows {
    position: absolute;
    top: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &-wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1220px;
      .splide__arrow--prev,
      .splide__arrow--next {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.white};
        :hover,
        :focus {
          background-color: ${({ theme }) => theme.colors.orange.extraBold};
          /* color: white; */
        }
        :disabled {
          color: rgba(16, 16, 16, 0.3);
          cursor: auto;
          background-color: ${({ theme }) => theme.colors.white};
        }
        svg {
          transform: scaleX(1);
        }
      }
    }
  }
  ${media.lessThan('tablet')`
    height: auto;
    .splide__arrows{
      &-wrapper {
        width: 80%;
        .splide__arrow--prev,
        .splide__arrow--next {
          width: 30px;
          height: 30px;
        }
      }
    }
  `}
`
export const TextContainer = styled.div`
  width: 100%;
  max-width: 670px;
  z-index: 1000;
  text-align: center;
  text-transform: uppercase;
  //  p {
  //    line-height: 1.6;
  //  }
  ${media.lessThan('tablet')`
    max-width:400px;
  `}
  ${({ theme }) => media.lessThan('mediumMobile')`
    h1{
      font-size: ${theme.font.size.h100}
    }
    p{
      margin-top: ${theme.spacing.x4};
      font-size: ${theme.font.size.h100}
    }
    max-width:200px;
  `}
`
