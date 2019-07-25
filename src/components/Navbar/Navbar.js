import React, { Component } from 'react'
import styles from './navbar.css'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'
import { Link, withRouter } from 'react-router-dom'

let cx = classNames.bind(styles)
class Navbar extends Component {
  constructor() {
    super()
    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/')
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className={cx('wrapper')}>
        <img className={cx('logo')} src={logo} onClick={this.goHome} />
        <nav className={cx('category')}>
          <Link to="/finance">Finance</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/politics">Politics</Link>
        </nav>
      </div>
    )
  }
}

export default withRouter(Navbar)
