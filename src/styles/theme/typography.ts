export type Weight = 'thin' | 'light' | 'normal' | 'semiBold' | 'bold'
export type Family = 'default' | 'secondary'
export type Size =
  | 'h800'
  | 'h700'
  | 'h600'
  | 'h500'
  | 'h400'
  | 'h300'
  | 'h200'
  | 'h100'
  | 'large'
  | 'body'
  | 'small'
  | 'label'

export default {
  base: '16px',
  family: {
    default: `'Lato', sans-serif`
  },
  weight: {
    thin: 100,
    light: 300,
    normal: 400,
    semiBold: 500,
    bold: 700
  },
  size: {
    h800: '8.75rem',
    h700: '5rem',
    h600: '4rem',
    h500: '2.5rem',
    h400: '2.25rem',
    h300: '2rem',
    h200: '1.625rem',
    h100: '1.25rem',
    large: '1.125rem',
    body: '1rem',
    small: '0.875rem',
    label: '0.75rem'
  }
}
