import React, { Component } from 'react'
import styles from './legal.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

export default class Contact extends Component {
  goTop() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  componentDidMount() {
    this.goTop()
  }

  render() {
    return (
      <div className={cx('wrapper')}>
        <h1>Hi, this is a blog which is talking about our life and history.</h1>
        <h2>If you have any questions, just contact me!</h2>
        <address>
          <a href="mailto:childben28@gmail.com">childben28@gmail.com</a>
        </address>
      </div>
    )
  }
}
