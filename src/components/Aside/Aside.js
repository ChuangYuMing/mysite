import React, { Component } from 'react'
import styles from './aside.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)

class Aside extends Component {
  render() {
    return (
      <div className={cx('wrapper')}>
        <aside>
          <h2 className={cx('title')}>aside</h2>
        </aside>
        <aside>
          <h2 className={cx('title')}>aside</h2>
        </aside>
      </div>
    )
  }
}

export default Aside
