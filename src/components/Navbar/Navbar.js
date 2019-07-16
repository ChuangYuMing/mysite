import React, { Component } from 'react'
import styles from './navbar.css'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'

let cx = classNames.bind(styles)
class Navbar extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { changeValueTest } = this.props
    setTimeout(() => {
      changeValueTest({ testValue: 'test new value' })
    }, 2000)
  }
  componentWillUnmount() {}

  render() {
    return (
      <div className={cx('wrapper')}>
        <img className={cx('logo')} src={logo} />
        <nav className={cx('category')}>
          <a>Economics</a>
          <a>Technology</a>
          <a>Coding</a>
        </nav>
      </div>
    )
  }
}

export default Navbar
