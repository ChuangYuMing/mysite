import React, { Component } from 'react'
import styles from './pages.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getPagesAsync, clearPages } from '../../store/reducers/pages'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'

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
      sendPageView(category)
    }
  }

  componentWillUnmount() {
    this.props.clearPages()
  }

  componentDidMount() {
    let { category } = this.props.match.params
    let { pages } = this.props

    if (pages.length === 0) {
      this.getPages(category)
    }

    sendPageView(category)
  }

  render() {
    let pages = this.props.pages

    if (!pages || this.props.isFetching) {
      return (
        <article className={cx('wrapper')}>
          <LoadingBtn />
        </article>
      )
    }

    let rows = pages.map(item => {
      return (
        <div className={cx('item')} key={item.title}>
          <img
            src={require(`../../assets/images/${item.url}/${
              item.url
            }-thumb.jpg`)}
            alt={item.title}
          />
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
    pages: state.pages.datas,
    isFetching: state.pages.isFetching
  }),
  { getPagesAsync, clearPages }
)(Pages)
