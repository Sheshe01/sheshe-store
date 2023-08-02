import 'styled-components'

import theme from './index'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    spacing: {
      none: string
      x1: string
      x2: string
      x3: string
      x4: string
      x5: string
      x6: string
      x7: string
      x8: string
      x9: string
      x10: string
      x11: string
      x12: string
      x13: string
      x14: string
      x15: string
      x16: string
      x17: string
      x18: string
      x19: string
      x20: string
      x21: string
    }
    font: {
      base: string
      family: {
        default: string
      }
      weight: {
        thin: number
        light: number
        normal: number
        semiBold: number
        bold: number
      }
      size: {
        h800: string
        h700: string
        h600: string
        h500: string
        h400: string
        h300: string
        h200: string
        h100: string
        large: string
        body: string
        small: string
        label: string
      }
    }
    colors: {
      background: string
      yellow: {
        light: string
        regular: string
        dark: string
      }
      orange: {
        light: string
        regular: string
        dark: string
        bold: string
        extraBold: string
      }
      blue: {
        dark: string
      }
      white: string
      black: string
      grey: {
        regular: string
        light: string
        dark: string
      }
    }
  }
}
