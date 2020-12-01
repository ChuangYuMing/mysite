import React, { useEffect, useState } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getArticleAsync } from '../../store/reducers/article'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import TopImage from './TopImage/TopImage'
import NotFound from '../NotFound/NotFound'
import MetaTag from './MetaTag/MetaTag'
import withoutHydration from '../../utils/withoutHydration'
import { useLocation } from 'react-router-dom'
import ArticleContent from './ArticleContent'
import StaticContent from '../StaticContent'

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
      props.getArticleAsync(browserUrl)
    }
    sendPageView(browserUrl)
    setFirstRender(false)
  }, [browserUrl])

  if (error === 1) {
    return <NotFound />
  }

  if (
    (isFromOtherPath && url !== browserUrl) ||
    props.isFetching ||
    (firstRender && isServerPrerender && url !== browserUrl)
  ) {
    return (
      <article className={cx('wrapper')}>
        <LoadingBtn />
      </article>
    )
  }

  let isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

  const ArticleContentWithoutHydration = withoutHydration()(ArticleContent)
  const Contetn =
    isFromOtherPath || !PRODUCTION || isServerPrerender
      ? ArticleContent
      : ArticleContentWithoutHydration

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
  { getArticleAsync }
)(Article)
