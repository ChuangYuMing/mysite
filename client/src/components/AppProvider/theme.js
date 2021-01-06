const theme = {
  breakpoints: ['40em', '52em', '64em', '80em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 24, 32, 48, 64],
  colors: {
    black: '#212121',
    primary: '#07c',
    primaryDark: '#0D47A1',
    gray: '#f6f6ff'
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
