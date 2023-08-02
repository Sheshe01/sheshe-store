import { generateMedia } from 'styled-media-query'

export const breakpoints = {
  ultraWide: '1366px',
  desktop: '1280px',
  laptop: '1024px',
  tablet: '768px',
  mobile: '650px',
  mediumMobile: '550px',
  smallMobile: '320px'
}

export default generateMedia(breakpoints)
