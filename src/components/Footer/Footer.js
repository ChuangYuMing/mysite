import React from 'react'
import styles from './footer.css'
import classNames from 'classnames/bind'
import { Link, withRouter } from 'react-router-dom'

let cx = classNames.bind(styles)

function Footer() {
  return (
    <>
      <div className={cx('wrapper')}>
        <Link
          to={{
            pathname: '/',
            state: { fromOtherPath: true }
          }}
          aria-label="Home"
        >
          <span className={cx('logo')}>Child Ben</span>
        </Link>

        <div className={cx('links')}>
          <Link to="/contact/" aria-label="Contact">
            Contact
          </Link>
          <Link to="/privacy-policy/" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link to="/terms/" aria-label="Terms">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(Footer)
