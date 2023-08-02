import styled from 'styled-components'
import media from 'styles/media'

export const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  ${media.lessThan('mediumMobile')`
    flex-direction: column;
  `}
`
export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 60%;

  .splide__arrows {
    .splide__arrow--prev,
    .splide__arrow--next {
      width: 20px;
      height: 20px;
      border: none;
      border-radius: 50%;
      background-color: transparent;

      svg {
        fill: ${({ theme }) => theme.colors.orange.extraBold};
        transform: scale(2);
      }
      :hover,
      :focus {
        svg {
          opacity: 0.5;
        }
      }
      :disabled {
        svg {
          opacity: 0.5;
        }
        cursor: auto;
      }
    }
  }
  #thumbnail-slider {
    order: 1;
    flex-basis: 15%;
    display: flex;
    align-items: center;
    #thumbnail-slider-list {
      .is-active {
        border: 3px solid ${({ theme }) => theme.colors.orange.extraBold};
      }
    }
    .splide__arrows {
      .splide__arrow--prev {
        transform: rotate(-90deg);
      }
      .splide__arrow--next {
        transform: rotate(90deg);
      }
      .splide__arrow--prev,
      .splide__arrow--next {
        left: 30%;
      }
    }
  }

  #main-slider {
    order: 2;
    flex-basis: 80%;
    #main-slider-list {
      justify-content: center;
      align-items: center;
    }
    .splide__arrows {
      .splide__arrow--prev {
        transform: rotate(-180deg);
      }
      .splide__arrow--next {
        transform: rotate(0deg);
      }
    }
  }
  ${media.lessThan('laptop')`
    #thumbnail-slider {
      .splide__arrows {
        .splide__arrow--prev,
        .splide__arrow--next {
          left: 40%;
        }
      }
    }
  `}
  ${media.lessThan('tablet')`
    .splide__arrows {
      .splide__arrow--prev,
      .splide__arrow--next {
        width: 10px;
        height: 10px;
      }
    }
    #main-slider {
      width: 80%;
    }
  `}
  ${media.lessThan('mediumMobile')`
    width:100%;
    #main-slider {
      width: 90%;
    }
  `}
`
export const ColumnRight = styled.div`
  width: 40%;
  padding: ${({ theme }) => theme.spacing.x17} 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  .accordion__header {
    margin-left: 0;

    border-top: 1px solid ${({ theme }) => theme.colors.grey.regular};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey.regular};
    border-radius: 0;
  }
  .accordion__section {
    overflow: visible;
  }
  ${media.lessThan('mediumMobile')`
    width:100%;
    padding: ${({ theme }) => theme.spacing.x8} 0;
  `}
`

export const AttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  flex-wrap: wrap;
`
