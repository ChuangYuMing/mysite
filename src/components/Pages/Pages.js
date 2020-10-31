import React, { useEffect } from 'react'
import styles from './pages.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getPagesAsync, clearPages } from '../../store/reducers/pages'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import { CDN_DOMAIN } from '../../constant'

let cx = classNames.bind(styles)

function Pages(props) {
  let { category } = props.match.params
  useEffect(() => {
    let { pages } = props
    if (pages.length === 0) {
      props.getPagesAsync(category)
      sendPageView(category)
      return props.clearPages()
    }

    props.getPagesAsync(category)
    sendPageView(category)

    return props.clearPages()
  }, [category])

  let pages = props.pages

  if (!pages || props.isFetching) {
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
          src={`${CDN_DOMAIN}/${item.url}/${item.url}-thumb.jpg`}
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


export default connect(
  state => ({
    pages: state.pages.datas,
    isFetching: state.pages.isFetching
  }),
  { getPagesAsync, clearPages }
)(Pages)
