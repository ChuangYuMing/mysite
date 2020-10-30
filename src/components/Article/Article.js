import React, { useEffect } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getArticleAsync } from '../../store/reducers/article'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import TopImage from './TopImage/TopImage'
import NotFound from '../NotFound/NotFound'
import MetaTag from './MetaTag/MetaTag'

let cx = classNames.bind(styles)

function Article(props) {
  let { url: browserUrl } = props.match.params
  let { title, content, url, error } = props.datas

  useEffect(() => {
    // prerender will rehydrate store data, 已經有資料就不用再發request
    if (url !== browserUrl) {
      props.getArticleAsync(browserUrl)
    }
    sendPageView(browserUrl)
  }, [browserUrl])


  if (error === 1) {
    return <NotFound />
  }

  if (url !== browserUrl || props.isFetching) {
    return (
      <article className={cx('wrapper')}>
        <LoadingBtn />
      </article>
    )
  }

  let isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

  return (
    <article className={cx('wrapper')}>
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('top-image')}>
        <TopImage type={isChrome ? 'webp' : 'jpg'} url={url} title={title} />
      </div>
      <div
        className={cx('content')}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <MetaTag data={props.datas} />
    </article>
  )
}


export default connect(
  (state) => ({
    datas: state.article.datas,
    isFetching: state.article.isFetching
  }),
  { getArticleAsync }
)(Article)
