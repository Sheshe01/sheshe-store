import React, { useMemo } from 'react'
import LinkComponent from 'components/common/LinkComponent'
import NavLink from './NavLink'
import { MenuProps } from './types'
import { List, ListItem, MenuContainer } from './styles'

const Menu: React.FC<MenuProps> = ({ categories, color }) => {
  const links = useMemo(
    () =>
      categories.map(item => (
        <NavLink key={item.id} link={item} color={color} />
      )),
    [color]
  )
  return (
    <MenuContainer>
      <List>
        <ListItem linkColor={color}>
          <LinkComponent href="/">HOME</LinkComponent>
        </ListItem>
        {links}
        <ListItem linkColor={color}>
          <LinkComponent href="/institutional">A ALMA DE ÁFRICA</LinkComponent>
        </ListItem>
        <ListItem linkColor={color}>
          <LinkComponent href="/contact">CONTATO</LinkComponent>
        </ListItem>
      </List>
    </MenuContainer>
  )
}

export default Menu
