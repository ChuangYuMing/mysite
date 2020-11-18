import React, { useEffect, useState } from 'react'
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
  let pages = props.pages
  let { category } = props.match.params
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    if (!firstRender || pages.length === 0) {
      props.getPagesAsync(category)
    }
    sendPageView(category)
    setFirstRender(false)
    return () => {
      props.clearPages()
    }
  }, [category])

  if (pages.length === 0 || props.isFetching) {
    return (
      <article className={cx('wrapper')}>
        <LoadingBtn />
      </article>
    )
  }

  let rows = pages.map((item) => {
    return (
      <div className={cx('item')} key={item.title}>
        <img
          src={`${CDN_DOMAIN}/${item.url}/${item.url}-thumb.jpg`}
          alt={item.title}
        />
        <Link to={`/${item.category}/${item.url}/`}>{item.title}</Link>
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
          content="ChildBen is the world's leading source of financial content on the web, ranging from market news to retirement strategies, investing, and trading."
        />
      </Helmet>
    </div>
  )
}

export default connect(
  (state) => ({
    pages: state.pages.datas,
    isFetching: state.pages.isFetching
  }),
  { getPagesAsync, clearPages }
)(Pages)
