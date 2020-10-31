import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styles from './notfound.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

function NotFound() {
  return (
    <>
      <div className={cx('wrapper')}>Ooops page not found...</div>
      <Helmet>
        <title>404</title>
        <meta name="description" content="page not found" />
      </Helmet>
    </>
  )
}

export default NotFound
