import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from 'store/index.js'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import App from '../App/App'

function AppProvider() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Route component={App} />
        </Router>
      </Provider>
    </ThemeProvider>
  )
}

export default AppProvider
