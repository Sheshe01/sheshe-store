import { createGlobalStyle } from 'styled-components'
import media from './media'
export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: ${({ theme }) => theme.font.family.default};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.light};
}
body {
    background:${props => props.theme.colors.background};
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: greyscale;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: ${({ theme }) => theme.font.family.default};
  font-size: ${({ theme }) => theme.font.base};
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
}
a{
  text-decoration: none;
}
button{
  cursor: pointer;
}
ul{
  list-style: none;
}
div * {
  transition: all 0.25s ease-in;
}
${media.lessThan('desktop')`
  html {
    font-size: 80%;
  }
`}
${media.lessThan('tablet')`
  html {
    font-size: 75%;
  }
`}
`
