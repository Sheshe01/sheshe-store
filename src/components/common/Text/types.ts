import { DefaultTheme } from 'styled-components'
import { Weight } from 'styles/theme/typography'

export interface ObjectStyles {
  color?: string
  fontSize: string
  fontWeight?: number
  lineHeight?: number
}

export interface TextProps {
  type?: string
  heading?: HeadingIndex
  large?: boolean
  small?: boolean
  body?: boolean
  weight?: Weight
  theme: DefaultTheme
  color?: string
  dangerouslySetInnerHTML?: Object
}

type HeadingIndex = 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100

export type FromIndex = { [index in HeadingIndex]: ObjectStyles }
