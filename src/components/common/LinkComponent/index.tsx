import React from 'react'
import Link from 'next/link'
import { LinkComponentProps } from './types'
import { StyledLink } from './styles'
const LinkComponent: React.FC<LinkComponentProps> = ({
  children,
  href,
  withArrow = false,
  isNewTab = false
}) => {
  return (
    <>
      {isNewTab ? (
        <StyledLink
          withArrow={withArrow}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </StyledLink>
      ) : (
        <Link href={href} passHref>
          <StyledLink withArrow={withArrow} href={href}>
            {children}
          </StyledLink>
        </Link>
      )}
    </>
  )
}

export default LinkComponent
