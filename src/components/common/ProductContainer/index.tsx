import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from 'components/common/Text'
import { ProductContainerProps } from './types'
import { rgbDataURL } from 'utils/helpers'

import { Container, ContainerImage } from './styles'
import withHtmlContent from 'utils/withHtmlContent'

const ProductContainer: React.FC<ProductContainerProps> = ({ data }) => {
  return (
    <Container>
      <ContainerImage>
        <Link href={`/product/${data.slug}`} passHref>
          <a href={data.slug}>
            <Image
              src={data.images[0].src}
              layout="responsive"
              width="320"
              height="400"
              placeholder="blur"
              blurDataURL={rgbDataURL(135, 104, 55)}
              quality={100}
              priority
            />
          </a>
        </Link>
      </ContainerImage>
      <Text body>{data.name}</Text>
      <Text body weight="bold" {...withHtmlContent(data.price_html)}></Text>
    </Container>
  )
}

export default ProductContainer
