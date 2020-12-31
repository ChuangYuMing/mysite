import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from 'store/index.js'
import App from '../App/App'

function AppProvider() {
  return (
    <Provider store={store}>
      <Router>
        <Route component={App} />
      </Router>
    </Provider>
  )
}

export default AppProvider;
