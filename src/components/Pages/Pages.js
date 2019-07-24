import React, { Component } from 'react'
import styles from './pages.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getPagesAsync } from '../../store/reducers/pages'
import { Link } from 'react-router-dom'

let cx = classNames.bind(styles)

class Pages extends Component {
  constructor(props) {
    super(props)
    this.getPages = this.getPages.bind(this)
  }

  getPages(category) {
    this.props.getPagesAsync(category)
  }

  componentDidUpdate(prevProps) {
    let category = this.props.match.params.category
    let preCategory = prevProps.match.params.category
    if (category !== preCategory) {
      this.getPages(category)
    }
  }

  componentDidMount() {
    let { category } = this.props.match.params
    this.getPages(category)
  }

  render() {
    let pages = this.props.pages
    let rows = pages.map(item => {
      return (
        <div className={cx('item')} key={item.title}>
          <Link to={`/${item.category}/${item.url}`}>{item.title}</Link>
        </div>
      )
    })
    return (
      <div className={cx('wrapper')}>
        <div className={cx('items')}>{rows}</div>
      </div>
    )
  }
}

export default connect(
  state => ({
    pages: state.pages.datas
  }),
  { getPagesAsync }
)(Pages)
