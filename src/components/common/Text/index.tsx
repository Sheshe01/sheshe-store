import styled from 'styled-components'
import colors from 'styles/theme/colors'
import typography from 'styles/theme/typography'
import { FromIndex, ObjectStyles, TextProps } from './types'

const headingStyles: FromIndex = {
  800: {
    fontSize: typography.size.h800,
    fontWeight: typography.weight.light,
    lineHeight: 0.9
  },
  700: {
    color: colors.black,
    fontSize: typography.size.h700,
    fontWeight: typography.weight.light,
    lineHeight: 1.1
  },
  600: {
    fontSize: typography.size.h600,
    fontWeight: typography.weight.light,
    lineHeight: 1.1
  },
  500: {
    fontSize: typography.size.h500,
    fontWeight: typography.weight.light
  },
  400: {
    fontSize: typography.size.h400,
    fontWeight: typography.weight.light
  },
  300: {
    fontSize: typography.size.h300,
    fontWeight: typography.weight.light
  },
  200: {
    fontSize: typography.size.h200,
    fontWeight: typography.weight.light
  },
  100: {
    fontSize: typography.size.h100,
    fontWeight: typography.weight.light
  }
}

const largeStyles = {
  fontSize: typography.size.large
}

const smallStyles = {
  fontSize: typography.size.small,
  fontWeight: typography.weight.normal
}

const bodyStyles = {
  fontSize: typography.size.body,
  fontWeight: typography.weight.light
}

function objToCss(objStyles: ObjectStyles) {
  if (!objStyles) {
    return null
  }
  return `
    ${objStyles.color ? `color: ${objStyles.color};` : ''}
    ${objStyles.fontSize ? `font-size: ${objStyles.fontSize};` : ''}
    ${objStyles.fontWeight ? `font-weight: ${objStyles.fontWeight};` : ''}
    ${objStyles.lineHeight ? `line-height: ${objStyles.lineHeight};` : ''}
  `
}

const Text = styled.p`
  ${({ theme, heading, large, small, body, weight, color }: TextProps) => `
    font-family: ${theme.font.family.default};
    font-weight: ${theme.font.weight.normal};
    color: ${theme.colors.black};
    line-height: 1.6;
    letter-spacing: -0.02em;
    ${small ? objToCss(smallStyles) : ''}
    ${large ? objToCss(largeStyles) : ''}
    ${body ? objToCss(bodyStyles) : ''}
    ${heading ? objToCss(headingStyles[heading]) : ''}
    ${weight ? `font-weight: ${weight};` : ''}
    ${color ? `color: ${color};` : ''}
  `};
`

export default Text
