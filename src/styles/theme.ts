export const theme = {
  colors: {
    primary: '#a7727d',
    secondary: '#f9f5e7',
    text: '#333',
    light: '#eee'
  },
  fonts: {
    primary: 'Lato, sans-serif',
    heading: 'Gloock, serif'
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px'
  }
} as const

export type Theme = typeof theme
