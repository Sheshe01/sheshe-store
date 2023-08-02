import React from 'react'
import TitleSection from 'components/common/TitleSection'
import ShowCategory from './ShowCategory'
import { DesignersCategoryProps } from './types'
import { DesignersCategoryContainer, GridCategories } from './styles'

const DesignersCategory: React.FC<DesignersCategoryProps> = ({
  title,
  designers,
  url
}) => {
  return (
    <DesignersCategoryContainer>
      <TitleSection href={url}>{title}</TitleSection>
      <GridCategories>
        {designers.slice(0, 3).map((designer, index) => (
          <ShowCategory key={designer.id} index={index + 1} data={designer} />
        ))}
      </GridCategories>
    </DesignersCategoryContainer>
  )
}

export default DesignersCategory
