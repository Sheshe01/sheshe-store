import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Text from 'components/common/Text'
import { DesignersPageProps } from './types'
import { rgbDataURL } from 'utils/helpers'
import * as Styled from './styles'

const DesignersPage: React.FC<DesignersPageProps> = ({ designersPageData }) => {
  return (
    <Styled.DesignersContainer>
      <Styled.Grid>
        {designersPageData.map(data => (
          <Styled.Card key={data.id}>
            <Link href={`/designer/${data.slug}`} passHref>
              <a href={data.slug}>
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  layout="responsive"
                  width="300"
                  height="449"
                  placeholder="blur"
                  objectFit="cover"
                  blurDataURL={rgbDataURL(135, 104, 55)}
                  quality={100}
                  priority
                />
              </a>
            </Link>
            <Text body>{data.name}</Text>
          </Styled.Card>
        ))}
      </Styled.Grid>
    </Styled.DesignersContainer>
  )
}

export default DesignersPage
