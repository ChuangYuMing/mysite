import React, { useEffect } from 'react'
import styles from './legal.css'
import classNames from 'classnames/bind'
import { Helmet } from 'react-helmet'

let cx = classNames.bind(styles)

function Contact() {
  useEffect(() => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }, [])

  return (
    <div className={cx('wrapper')}>
      <h1>
        Hi, ChildBen is the world's leading source of financial content on the
        web, ranging from market news to retirement strategies, investing, and
        trading.
      </h1>
      <h2>If you have any questions, just contact me!</h2>
      <address>
        <a href="mailto:childben28@gmail.com">childben28@gmail.com</a>
      </address>

      <Helmet>
        <title>Contact us</title>
        <meta name="description" content="Just Contact us" />
        <meta name="robots" content="noindex" />
      </Helmet>
    </div>
  )
}

export default Contact
