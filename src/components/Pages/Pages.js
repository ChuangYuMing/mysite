import React, { Component } from 'react'
import styles from './pages.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getPagesAsync } from '../../store/reducers/pages'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

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

    if (!pages) {
      return <div>ooops! something wrong</div>
    }

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
        <Helmet>
          <title>ChildBen</title>
          <meta
            name="description"
            content="The blog about everything you want"
          />
        </Helmet>
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
