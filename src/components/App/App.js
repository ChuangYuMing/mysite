import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './App.css'
import Main from '../Main/Main'

let cx = classNames.bind(styles)
class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.haveload = false
  }

  render() {
    return <Route component={Main} />
  }
}

const mapStateToProps = state => {
  return {}
}
export default withRouter(connect(mapStateToProps)(App))
