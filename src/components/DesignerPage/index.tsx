import React from 'react'
import Image from 'next/image'
import { DesignerPageProps } from './types'
import { rgbDataURL } from 'utils/helpers'
import withHtmlContent from 'utils/withHtmlContent'
import * as Styled from './styles'

const DesignerPage: React.FC<DesignerPageProps> = ({ designerFound }) => {
  const { image, description } = designerFound
  return (
    <Styled.DesignerContainer>
      <Styled.ContainerImage>
        <Image
          alt={image.alt}
          src={image.src}
          width={500}
          height={749}
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={rgbDataURL(135, 104, 55)}
          quality={100}
          priority
        />
        <Styled.AltImage>{image.alt}</Styled.AltImage>
      </Styled.ContainerImage>
      <Styled.TextContainer {...withHtmlContent(description)} />
    </Styled.DesignerContainer>
  )
}

export default DesignerPage
