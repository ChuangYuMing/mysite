import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeValueTest } from '../../store/reducers/test'
import styles from './main.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)
class Main extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const { changeValueTest } = this.props
    setTimeout(() => {
      changeValueTest({ testValue: 'test new value'})
    }, 2000)
  }
  componentWillUnmount() {}

  render() {
    return <div className={cx('main-wrap')}>{this.props.test}</div>
  }
}

export default connect(
  (state) => ({
    test: state.test.testValue,
  }),
  { changeValueTest }
)(Main);
