import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from 'components/common/Text'
import { ShowCategoryProps } from './types'

import { ShowCategoryContainer, ContainerImage } from './styles'
import { rgbDataURL } from 'utils/helpers'
import colors from 'styles/theme/colors'

const ShowCategory: React.FC<ShowCategoryProps> = ({ data, index }) => {
  const { name, slug, image } = data
  return (
    <Link href={`/designer/${slug}`}>
      <a style={{ gridArea: `category-${index}` }}>
        <ShowCategoryContainer>
          <ContainerImage>
            <Image
              alt={image.alt}
              src={image.src}
              width={280}
              height={420}
              layout="responsive"
              placeholder="blur"
              blurDataURL={rgbDataURL(135, 104, 55)}
              quality={100}
              objectFit="cover"
              priority
            />
          </ContainerImage>
          <Text as="h4" heading={400} color={colors.white}>
            {name}
          </Text>
        </ShowCategoryContainer>
      </a>
    </Link>
  )
}

export default ShowCategory
