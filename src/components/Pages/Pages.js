import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './pages.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import { CDN_DOMAIN } from '../../constant'
import { getPagesByCategory, clearPages } from './pagesSlice'
import StaticContent from '../StaticContent'

let cx = classNames.bind(styles)

function Pages(props) {
  let pages = props.pages
  let { category } = props.match.params
  const location = useLocation()
  const [firstRender, setFirstRender] = useState(true)
  const isServerPrerender = navigator.userAgent === 'ReactSnap'
  const isFromOtherPath = location.state && location.state.fromOtherPath

  useEffect(() => {
    if (isFromOtherPath || !PRODUCTION || isServerPrerender) {
      props.getPagesByCategory(category)
    }
    sendPageView(category)
    setFirstRender(false)
    return () => {
      props.clearPages()
    }
  }, [category])

  if (props.isFetching === 'pending') {
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
        <Link
          to={{
            pathname: `/${item.category}/${item.url}/`,
            state: { fromOtherPath: true }
          }}
        >
          {item.title}
        </Link>
      </div>
    )
  })

  return (
    <StaticContent>
      <div className={cx('wrapper')}>
        <div className={cx('items')}>{rows}</div>
        <Helmet>
          <title>
            ChildBen{category ? `(${category})` : ''}: Guiding you through
            financial world.
          </title>
          <meta
            name="description"
            content="ChildBen is the world's leading source of financial content on the web, ranging from market news to retirement strategies, investing, and trading."
          />
        </Helmet>
      </div>
    </StaticContent>
  )
}

export default connect(
  (state) => ({
    pages: state.pages.datas,
    isFetching: state.pages.isFetching
  }),
  { getPagesByCategory, clearPages }
)(Pages)
