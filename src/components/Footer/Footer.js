import React, { Component } from 'react'
import styles from './footer.css'
import classNames from 'classnames/bind'
import { Link, withRouter } from 'react-router-dom'

let cx = classNames.bind(styles)
class Footer extends Component {
  constructor() {
    super()
    this.goHome = this.goHome.bind(this)
  }

  goHome() {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <div className={cx('wrapper')}>
        <Link to="/" aria-label="Home">
        <span className={cx('logo')}>Child Ben</span>
            </Link>
          
          <div className={cx('links')}>
            <Link to="/contact" aria-label="Contact">
              Contact
            </Link>
            <Link to="/privacy-policy" aria-label="Privacy Policy">
              Privacy Policy
            </Link>
            <Link to="/terms" aria-label="Terms">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Footer)
