import React from 'react'
import Link from 'next/link'
import { StyledLink } from './styles'
import { TitleSectionProps } from './types'
const TitleSection: React.FC<TitleSectionProps> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <StyledLink href={href}>{children}</StyledLink>
    </Link>
  )
}

export default TitleSection
