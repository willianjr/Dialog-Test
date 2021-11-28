import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../common/assets/styles/global'
import Themes from '../common/assets/styles/themes'
import { RoutesComponent } from './Routes'
import { client } from './services/apiGraphql'
import { ApolloProvider } from '@apollo/client'
function App(): JSX.Element {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={Themes.defaultTheme}>
          <BrowserRouter>
            <GlobalStyle />
            <RoutesComponent />
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default App
