import React from 'react'
import Image from 'next/image'
import Text from 'components/common/Text'
import colors from 'styles/theme/colors'
import { CallToActionProps } from './types'
import { rgbDataURL } from 'utils/helpers'
import LinkComponent from 'components/common/LinkComponent'
import { CallToActionContainer, TextContainer } from './styles'
import withHtmlContent from 'utils/withHtmlContent'
import { ButtonElement } from 'components/structure/Footer/styles'

const CallToAction: React.FC<CallToActionProps> = ({ data }) => {
  const { title, description, image } = data
  return (
    <CallToActionContainer>
      <Image
        alt="Mountains"
        src={image}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={rgbDataURL(135, 104, 55)}
        quality={100}
        priority
      />
      <TextContainer>
        <LinkComponent href="/institutional">
          <Text heading={400} color={colors.white}>
            {title}
          </Text>
        </LinkComponent>
      </TextContainer>
    </CallToActionContainer>
  )
}

export default CallToAction
