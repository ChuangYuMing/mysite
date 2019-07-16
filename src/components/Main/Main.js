import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValueTest } from '../../store/reducers/test'
import styles from './main.css'
import classNames from 'classnames/bind'
import Navbar from '../Navbar/Navbar'
import Article from '../Article/Article'
import Aside from '../Aside/Aside'

let cx = classNames.bind(styles)
class Main extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <main className={cx('wrapper')}>
        <Navbar />
        <div className={cx('container')}>
          <Article />
          <Aside />
        </div>
      </main>
    )
  }
}

export default connect(
  state => ({
    test: state.test.testValue
  }),
  { changeValueTest }
)(Main)
