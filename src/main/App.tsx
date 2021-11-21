import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../common/assets/styles/global'
import Themes from '../common/assets/styles/themes'
import { RoutesComponent } from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css'
function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={Themes.defaultTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesComponent />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
