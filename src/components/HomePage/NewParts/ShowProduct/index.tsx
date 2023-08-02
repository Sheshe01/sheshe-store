import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from 'components/common/Text'
import { ShowProductProps } from './types'
import { formatPrice, rgbDataURL } from 'utils/helpers'

import { ShowProductContainer, ContainerImage } from './styles'

const ShowProduct: React.FC<ShowProductProps> = ({ data }) => {
  return (
    <ShowProductContainer>
      <ContainerImage>
        <Link href={`/product/${data.slug}`} passHref>
          <a href={data.slug}>
            <Image
              src={data.images[0].src}
              layout="responsive"
              width="400"
              height="480"
              placeholder="blur"
              blurDataURL={rgbDataURL(135, 104, 55)}
              quality={100}
              priority
            />
          </a>
        </Link>
      </ContainerImage>
      <Text body>{data.name}</Text>
      <Text body weight="bold">
        {formatPrice(parseInt(data.price as string))}
      </Text>
    </ShowProductContainer>
  )
}

export default ShowProduct
