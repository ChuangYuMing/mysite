export const breakpoints =  ['40em', '52em', '64em', '80em']

const theme = {
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64],
  colors: {
    greyDarkestVariant: '#4a4a4a',
    greyDarkest: '#57626e',
    greyDarker: '#8698aa',
    greyDark: '#7b7b7b',
    grey: '#caced6',
    greyLighter: '#dce4ec',
    greyLightest: '#f9f9f9',
    primaryDark: '#0D47A1',
    primary: '#07c',
    accent: '#9a4b4b',
    accentLighter: '#fb3a00'
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      cursor: 'pointer'
    },
    ordered: {
      color: 'white',
      bg: 'primaryDark',
      cursor: 'pointer'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      cursor: 'pointer',
      '&:hover': {
        bg: 'primary',
        color: 'white'
      }
    }
  }
}
export default theme
