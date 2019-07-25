import React, { Component } from 'react'
import styles from './navbar.css'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'
import { Link, withRouter } from 'react-router-dom'

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
          <img className={cx('logo')} src={logo} onClick={this.goHome} />
          <nav className={cx('category')}>
            <Link to="/finance">Finance</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/politics">Politics</Link>
          </nav>
        </div>
        <div className={cx('mb-wrapper')}>
          <div className={cx('top')}>
            <img className={cx('logo')} src={logo} onClick={this.goHome} />
            <span className={cx('title')}>ChildBen</span>
            <button
              className={cx('menu')}
              type="text"
              onClick={this.toggleMenu}
            >
              menu
            </button>
          </div>
          <nav className={menucx}>
            <button
              className={cx('menu')}
              type="text"
              onClick={this.toggleMenu}
            >
              menu2
            </button>
            <div classNames={cx('links')}>
              <Link to="/finance">Finance</Link>
              <Link to="/technology">Technology</Link>
              <Link to="/politics">Politics</Link>
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default withRouter(Navbar)
