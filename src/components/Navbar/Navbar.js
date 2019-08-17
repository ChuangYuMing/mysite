import React, { Component } from 'react'
import styles from './navbar.css'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'
import { Link, withRouter } from 'react-router-dom'
import MenuBtn from './MenuBtn/MenuBtn'

let cx = classNames.bind(styles)
class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      openMenu: false
    }
    this.goHome = this.goHome.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  goHome() {
    this.props.history.push('/')
  }

  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    let { openMenu } = this.state
    let menucx = cx({
      category: true,
      open: openMenu,
      close: !openMenu
    })

    return (
      <>
        <div className={cx('wrapper')}>
          <img
            className={cx('logo')}
            src={logo}
            onClick={this.goHome}
            alt="Logo"
          />
          <nav className={cx('category')}>
            <Link to="/finance" aria-label="Finance">
              Finance
            </Link>
          </nav>
        </div>
        <div className={cx('mb-wrapper')}>
          <div className={cx('top')}>
            <img
              className={cx('logo')}
              src={logo}
              onClick={this.goHome}
              alt="Logo"
            />
            <span className={cx('title')}>ChildBen</span>
            <MenuBtn
              className={cx('menu')}
              onClick={this.toggleMenu}
              color="#000"
            />
          </div>
          <nav className={menucx}>
            <MenuBtn
              className={cx('menu2')}
              onClick={this.toggleMenu}
              color="#fff"
            />
            <div className={cx('links')} onClick={this.toggleMenu}>
              <Link to="/finance" aria-label="Finance">
                Finance
              </Link>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default withRouter(Navbar)
