import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './App.css'
import Main from '../Main/Main'
import backgroundTest from '../../assets/images/testimg.png'

let cx = classNames.bind(styles)
class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.haveload = false
  }

  render() {

    return (
      <div className={styles['background-test']}>
        <img src={backgroundTest} alt="backgroundTest"/>
        <Switch>
          <Route exact path={'/'} component={Main} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}
export default withRouter(connect(
  mapStateToProps
)(App))

