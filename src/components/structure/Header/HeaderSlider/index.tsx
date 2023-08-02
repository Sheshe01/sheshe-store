import React from 'react'
import Image from 'next/image'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Text from 'components/common/Text'
import { rgbDataURL } from 'utils/helpers'
import colors from 'styles/theme/colors'
import typography from 'styles/theme/typography'
import { SlideContent, Wrapper, TextContainer } from './styles'
import '@splidejs/splide/dist/css/splide.min.css'

const HeaderSlider = () => {
  return (
    <Wrapper>
      <Splide
        renderControls={() => (
          <div className="splide__arrows">
            <div className="splide__arrows-wrapper">
              <button className="splide__arrow--prev">
                <AiOutlineLeft />
              </button>
              <button className="splide__arrow--next">
                <AiOutlineRight />
              </button>
            </div>
          </div>
        )}
        options={{
          perPage: 1,
          autoplay: true,
          lazyLoad: 'nearby',
          pauseOnHover: false,
          resetProgress: false,
          arrows: 'slider',
          pagination: false,
          type: 'loop',
          interval: 30000,
          speed: 1000
        }}
      >
        <SplideSlide>
          <SlideContent>
            <Image
              alt="Mountains"
              src="/images/carrossel-1.png"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={rgbDataURL(135, 104, 55)}
              quality={100}
              priority
            />
            <TextContainer>
              <Text heading={400} color={colors.white}>
                A moda é uma forma de expressão de um povo e de uma época.{' '}
                <br></br>A Sheshe existe para valorizar o lifestyle africano por
                meio da moda e das artes.
              </Text>
            </TextContainer>
          </SlideContent>
        </SplideSlide>
        <SplideSlide>
          <SlideContent>
            <Image
              alt="Mountains"
              src="/images/carrossel-2_resized.png"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={rgbDataURL(135, 104, 55)}
              quality={100}
              priority
            />
            <TextContainer>
              <Text heading={400} color={colors.white}>
                E vai mais além, promove a diversidade cultural, a inclusão
                socioeconômica e a equidade dentro e fora do continente
                africano.
              </Text>
            </TextContainer>
          </SlideContent>
        </SplideSlide>
        <SplideSlide>
          <SlideContent>
            <Image
              alt="Mountains"
              src="/images/carrossel-3.png"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={rgbDataURL(135, 104, 55)}
              quality={100}
              priority
            />
            <TextContainer>
              <Text heading={400} color={colors.white}>
                Moda autêntica<br></br>
                Original <br></br>
                Colorida<br></br>
                Ancestral Com a Alma de África
              </Text>
            </TextContainer>
          </SlideContent>
        </SplideSlide>
      </Splide>
    </Wrapper>
  )
}

export default HeaderSlider
