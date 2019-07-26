import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import AppProvider from './components/AppProvider'

const rootElement = document.getElementById('root')
const render = Component => {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(
      <AppContainer>
        <Component />
      </AppContainer>,
      rootElement
    )
  } else {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      rootElement
    )
  }
}

render(AppProvider)
