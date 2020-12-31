import React, { useEffect, useState } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import NotFound from '../NotFound/NotFound'
import { useLocation } from 'react-router-dom'
import ArticleContent from './ArticleContent'
import StaticContent from '../StaticContent'
import { getArticle } from './articleSlice'
import { useSelector, useDispatch } from 'react-redux'

let cx = classNames.bind(styles)

function Article(props) {
  let { url: browserUrl } = props.match.params
  const { datas, isFetching } = useSelector((state) => state.article)
  const location = useLocation()
  const dispatch = useDispatch()
  let { title, content, url, error } = datas
  const [firstRender, setFirstRender] = useState(true) // prerender
  const isServerPrerender = navigator.userAgent === 'ReactSnap'
  const isFromOtherPath = location.state && location.state.fromOtherPath

  useEffect(() => {
    if (isFromOtherPath || !PRODUCTION || isServerPrerender) {
      dispatch(getArticle(browserUrl))
    }
    sendPageView(browserUrl)
    setFirstRender(false)
  }, [browserUrl])

  if (error === 1) {
    return <NotFound />
  }

  if (
    (isFromOtherPath && url !== browserUrl) ||
    isFetching === 'pending' ||
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
        <ArticleContent datas={datas} />
      </StaticContent>
    </div>
  )
}

export default Article
