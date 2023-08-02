import React from 'react'
import Image from 'next/image'
import InnerImageZoom from 'react-inner-image-zoom'
import { SplideSlide } from '@splidejs/react-splide'
import { RenderSlidesProps } from './types'

import * as Styled from './styles'
import { rgbDataURL } from 'utils/helpers'

const RenderSlides: React.FC<RenderSlidesProps> = ({ product, type }) => {
  const { images } = product

  if (type === 'thumbSlide' || type === 'mainSlideMobile') {
    return (
      <React.Fragment>
        {images.map(slide => {
          const { id, src, name } = slide
          return (
            <SplideSlide key={name}>
              <Image
                src={src}
                layout="fill"
                priority
                placeholder="blur"
                blurDataURL={rgbDataURL(135, 104, 55)}
              />
            </SplideSlide>
          )
        })}
      </React.Fragment>
    )
  }
  return (
    <React.Fragment>
      {images.map(slide => {
        const { id, src } = slide
        return (
          <SplideSlide key={id}>
            <Styled.MainContent>
              <InnerImageZoom
                className="image-zoom"
                src={src}
                hideHint={true}
                fullscreenOnMobile={true}
                zoomType="hover"
              />
            </Styled.MainContent>
          </SplideSlide>
        )
      })}
    </React.Fragment>
  )
}

export default RenderSlides
