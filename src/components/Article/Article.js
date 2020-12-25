import React, { useEffect, useState } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import NotFound from '../NotFound/NotFound'
import { useLocation } from 'react-router-dom'
import ArticleContent from './ArticleContent'
import StaticContent from '../StaticContent'
import { getArticle } from './articleSlice'

let cx = classNames.bind(styles)

function Article(props) {
  let { url: browserUrl } = props.match.params
  const location = useLocation()
  let { title, content, url, error } = props.datas
  const [firstRender, setFirstRender] = useState(true) // prerender
  const isServerPrerender = navigator.userAgent === 'ReactSnap'
  const isFromOtherPath = location.state && location.state.fromOtherPath

  useEffect(() => {
    if (isFromOtherPath || !PRODUCTION || isServerPrerender) {
      props.getArticle(browserUrl)
    }
    sendPageView(browserUrl)
    setFirstRender(false)
  }, [browserUrl])

  if (error === 1) {
    return <NotFound />
  }

  if (
    (isFromOtherPath && url !== browserUrl) ||
    props.isFetching === 'pending' ||
    (firstRender && isServerPrerender && url !== browserUrl)
  ) {
    return (
      <article className={cx('wrapper')}>
        <LoadingBtn />
      </article>
    )
  }

  return (
    <div className={cx('wrapper')}>
      <StaticContent>
        <ArticleContent datas={props.datas} />
      </StaticContent>
    </div>
  )
}

export default connect(
  (state) => ({
    datas: state.article.datas,
    isFetching: state.article.isFetching
  }),
  { getArticle }
)(Article)
