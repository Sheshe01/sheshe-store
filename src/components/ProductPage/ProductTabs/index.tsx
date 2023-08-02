import React from 'react'
import withHtmlContent from 'utils/withHtmlContent'
import Tabs from '../Tabs'
import Tab from '../Tab'
import { ProductTabsProps } from './types'
import * as Styled from './styles'

const ProductTabs: React.FC<ProductTabsProps> = ({ data }) => {
  return (
    <Styled.ContainerDetailsProduct>
      <Tabs>
        {data.map(tab => (
          <Tab key={tab.index} title={tab.tabTitle}>
            <Styled.TabContent {...withHtmlContent(tab.tabContent)} />
          </Tab>
        ))}
      </Tabs>
    </Styled.ContainerDetailsProduct>
  )
}

export default ProductTabs
