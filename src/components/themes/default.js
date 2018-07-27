import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#4D3CDC'],
  secondary: ['#FF9898'],
  gray: ['#000000', '#4E4848', '#616161', '#E8E7E7', '#f0f0f0', '#ffffff'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
}

theme.sizes = {
  maxWidth: '900px',
}

export default theme
