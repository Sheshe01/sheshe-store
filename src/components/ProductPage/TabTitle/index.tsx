import React, { useCallback } from 'react'
import withHtmlContent from 'utils/withHtmlContent'
import { TabTitleProps } from './types'
import { TabListItem } from './styles'
const TabTitle: React.FC<TabTitleProps> = ({
  title,
  setSelectedTab,
  index,
  active
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <TabListItem isItemActive={active}>
      <a onClick={onClick} {...withHtmlContent(title)} />
    </TabListItem>
  )
}

export default TabTitle
