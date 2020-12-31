import React from 'react'
import ReactDOM from 'react-dom'
import AppProvider from './components/AppProvider'

const rootElement = document.getElementById('root')
const render = (Component) => {
  if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<Component />, rootElement)
  } else {
    ReactDOM.render(<Component />, rootElement)
  }
}

render(AppProvider)

