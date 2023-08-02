import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import LinkComponent from 'components/common/LinkComponent'
import { NavLinkProps } from './types'
import { ListItem, ListItemSubmenu, ListItemSubmenuMobile } from './styles'
import useWindowSize from 'hooks/useWindowSize'
import { useMenuContext } from 'context/MenuContext'
const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.055
    },
    display: 'block'
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.055,
      delay: 0.05
    },
    transitionEnd: {
      display: 'none'
    }
  }
}
const NavLink: React.FC<NavLinkProps> = ({ link, color }) => {
  const { isMobileDevice } = useWindowSize()
  const { isSubmenuVisible, setIsSubmenuVisible } = useMenuContext()

  if (link.children && link.children.length > 0 && !isMobileDevice) {
    return (
      <ListItem
        onMouseOver={() => setIsSubmenuVisible(true)}
        onMouseLeave={() => setIsSubmenuVisible(false)}
        onFocus={() => setIsSubmenuVisible(true)}
        onBlur={() => setIsSubmenuVisible(false)}
        linkColor={color}
      >
        <LinkComponent withArrow href={`/category/${link.slug}`}>
          {link.name}
          <MdKeyboardArrowDown size={12} />
        </LinkComponent>
        {link.children ? (
          <ListItemSubmenu
            variants={variants}
            initial="hidden"
            animate={isSubmenuVisible ? 'visible' : 'hidden'}
            transition={{
              duration: 0.025
            }}
          >
            {link.children.map(linkChildren => (
              <ListItem
                key={linkChildren.id}
                linkColor={color}
                style={{ marginBottom: '0.5rem' }}
              >
                <LinkComponent
                  href={`/category/${link.slug}/${linkChildren.slug}`}
                >
                  {linkChildren.name}
                </LinkComponent>
              </ListItem>
            ))}
          </ListItemSubmenu>
        ) : null}
      </ListItem>
    )
  }
  if (link.children && link.children.length > 0 && isMobileDevice) {
    return (
      <ListItem linkColor={color}>
        <LinkComponent href={`/category/${link.slug}`}>
          {link.name}
          {link.children ? (
            <ListItemSubmenuMobile>
              {link.children.map((linkChildren, index) => (
                <ListItem
                  key={linkChildren.id}
                  linkColor={color}
                  style={
                    index + 1 === link.children?.length
                      ? {}
                      : { padding: '0 0 0.5rem 0' }
                  }
                >
                  <LinkComponent
                    href={`/category/${link.slug}/${linkChildren.slug}`}
                  >
                    {linkChildren.name}
                  </LinkComponent>
                </ListItem>
              ))}
            </ListItemSubmenuMobile>
          ) : null}
        </LinkComponent>
      </ListItem>
    )
  }
  return (
    <ListItem key={link.id} linkColor={color}>
      <LinkComponent href={`/category/${link.slug}`}>{link.name}</LinkComponent>
    </ListItem>
  )
}

export default NavLink
