import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import ShowProduct from './ShowProduct'
import TitleSection from 'components/common/TitleSection'
import useWindowSize from 'hooks/useWindowSize'
import { NewPartsProps } from './types'
import { NewPartsContainer } from './styles'

const NewParts: React.FC<NewPartsProps> = ({ title, products }) => {
  const { isMobileDevice } = useWindowSize()
  return (
    <NewPartsContainer>
      <TitleSection href="/">{title}</TitleSection>
      <Splide
        options={{
          perPage: isMobileDevice ? 2 : 3,
          autoplay: false,
          pauseOnHover: false,
          resetProgress: false,
          arrows: false,
          pagination: true,
          gap: '10px'
        }}
      >
        {products.map(product => (
          <SplideSlide key={product.id}>
            <ShowProduct data={product} />
          </SplideSlide>
        ))}
      </Splide>
    </NewPartsContainer>
  )
}

export default NewParts
