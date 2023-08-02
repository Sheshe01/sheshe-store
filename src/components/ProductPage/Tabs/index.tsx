import React, { useState } from 'react'
import TabTitle from '../TabTitle'
import { TabsProps } from './types'
import { TabList } from './styles'

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <TabList>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            active={index === selectedTab}
          />
        ))}
      </TabList>
      {children[selectedTab]}
    </div>
  )
}

export default Tabs
