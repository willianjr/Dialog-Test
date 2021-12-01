import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/App'
import * as serviceWorker from './main/ServiceWork'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
