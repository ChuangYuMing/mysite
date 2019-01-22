import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from 'store/index.js'
import { hot } from 'react-hot-loader'
import App from '../App/App'

class AppProvider extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route component={App} />
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(AppProvider)
