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
      <Link
        to={{
          pathname: '/finance/',
          state: { fromOtherPath: true }
        }}
        aria-label="Finance"
      >
        Finance
      </Link>
      <Link
        to={{
          pathname: '/economics/',
          state: { fromOtherPath: true }
        }}
        aria-label="Economics"
      >
        Economics
      </Link>
      <Link
        to={{
          pathname: '/investing/',
          state: { fromOtherPath: true }
        }}
        aria-label="Investing"
      >
        Investing
      </Link>
      <Link
        to={{
          pathname: '/career/',
          state: { fromOtherPath: true }
        }}
        aria-label="Career"
      >
        Career
      </Link>
      <Link
        to={{
          pathname: '/trading/',
          state: { fromOtherPath: true }
        }}
        aria-label="Trading"
      >
        Trading
      </Link>
      <Link
        to={{
          pathname: '/politics/',
          state: { fromOtherPath: true }
        }}
        aria-label="Politics"
      >
        Politics
      </Link>
      <Link
        to={{
          pathname: '/history/',
          state: { fromOtherPath: true }
        }}
        aria-label="History"
      >
        History
      </Link>
    </>
  )
  return (
    <>
      <div className={cx('wrapper')}>
        <Link
          to={{
            pathname: '/',
            state: { fromOtherPath: true }
          }}
        >
          <img
            className={cx('logo')}
            width="45"
            height="45"
            src={logo}
            alt="Logo"
          />
        </Link>
        <nav className={cx('category')}>{Links}</nav>
      </div>
      <div className={cx('mb-wrapper')}>
        <div className={cx('top')}>
          <Link
            to={{
              pathname: '/',
              state: { fromOtherPath: true }
            }}
          >
            <img
              className={cx('logo')}
              width="45"
              height="45"
              src={logo}
              onClick={goHome}
              alt="Logo"
            />
          </Link>
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
