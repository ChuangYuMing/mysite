import React, { Component } from 'react'
import styles from './navbar.css'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

let cx = classNames.bind(styles)
class Navbar extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div className={cx('wrapper')}>
        <img className={cx('logo')} src={logo} />
        <nav className={cx('category')}>
          <Link to="/finance">Finance</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/politics">Politics</Link>
        </nav>
      </div>
    )
  }
}

export default Navbar
