import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      text: string
      light: string
    }
    fonts: {
      primary: string
      heading: string
    }
    breakpoints: {
      mobile: string
      tablet: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
  }
}
