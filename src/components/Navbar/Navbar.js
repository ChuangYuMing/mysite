import React, { useState } from 'react'
import styles from './navbar.css'
import classNames from 'classnames/bind'
import logo from '../../assets/images/logo.png'
import { Link, withRouter } from 'react-router-dom'
import MenuBtn from './MenuBtn/MenuBtn'

let cx = classNames.bind(styles)

function Navbar(props) {
  const [openMenu, setOpenMenu] = useState(false)

  function goHome() {
    props.history.push('/')
  }

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  let menucx = cx({
    category: true,
    open: openMenu,
    close: !openMenu
  })

  const Links = (
    <>
      <Link to="/finance/" aria-label="Finance">
        Finance
      </Link>
      <Link to="/economics/" aria-label="Economics">
        Economics
      </Link>
      <Link to="/investing/" aria-label="Investing">
        Investing
      </Link>
      <Link to="/career/" aria-label="Career">
        Career
      </Link>
      <Link to="/trading/" aria-label="Trading">
        Trading
      </Link>
      <Link to="/politics/" aria-label="Politics">
        Politics
      </Link>
      <Link to="/history/" aria-label="History">
        History
      </Link>
    </>
  )
  return (
    <>
      <div className={cx('wrapper')}>
        <img
          className={cx('logo')}
          width="45"
          height="45"
          src={logo}
          onClick={goHome}
          alt="Logo"
        />
        <nav className={cx('category')}>{Links}</nav>
      </div>
      <div className={cx('mb-wrapper')}>
        <div className={cx('top')}>
          <img
            className={cx('logo')}
            width="45"
            height="45"
            src={logo}
            onClick={goHome}
            alt="Logo"
          />
          <span className={cx('title')}>ChildBen</span>
          <MenuBtn className={cx('menu')} onClick={toggleMenu} color="#000" />
        </div>
        <nav className={menucx}>
          <MenuBtn className={cx('menu2')} onClick={toggleMenu} color="#fff" />
          <div className={cx('links')} onClick={toggleMenu}>
            {Links}
          </div>
        </nav>
      </div>
    </>
  )
}

export default withRouter(Navbar)
