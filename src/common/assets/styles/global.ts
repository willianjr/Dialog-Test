import { createGlobalStyle } from 'styled-components'
import themeProps from '../../interfaces/theme'

export const GlobalStyle = createGlobalStyle<{ theme: themeProps }>`
  *{
    font-family:${({ theme: { fonts } }) => fonts.default.family};
    font-size:${({ theme: { fonts } }) => fonts.default.size};
    box-sizing:border-box;

  }
  html{ scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }
body{
	  background: ${({ theme: { colors } }) => colors.background.body} ;
    background-size:200vw 50vh, 100vw 100vh;
    background-attachment:scroll,scroll;
    background-position:center -20vh,0 0;
    background-repeat:no-repeat, repeat;
    min-height:100vh;
    overflow:auto;

    @media (max-width: 767px) {
    background-attachment:fixed;
  }

	}
  input{
    background-color: ${({ theme: { colors } }) => colors.input.default.background};
    border-color: ${({ theme: { colors } }) => colors.input.default.border};
    color: ${({ theme: { colors } }) => colors.input.default.text};
  }
`
