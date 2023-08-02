import React from 'react'

import { MenuToggleProps } from './types'
import {
  MenuToggleWrapper,
  MenuToggleInput,
  MenuToggleIcon,
  MenuToggleIconLine
} from './styles'

const MenuToggle: React.FC<MenuToggleProps> = ({
  isCollapsed = false,
  onToggle = () => {}
}) => {
  return (
    <MenuToggleWrapper>
      <MenuToggleInput
        type="checkbox"
        checked={isCollapsed}
        onChange={() => onToggle()}
      />
      <MenuToggleIcon isCollapsed={isCollapsed}>
        <MenuToggleIconLine className="first-line" />
        <MenuToggleIconLine className="second-line" />
        <MenuToggleIconLine className="third-line" />
      </MenuToggleIcon>
    </MenuToggleWrapper>
  )
}

export default MenuToggle
