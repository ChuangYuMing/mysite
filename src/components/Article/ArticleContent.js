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

let cx = classNames.bind(styles)

function ArticleContent(props) {
  let { title, content, url, error } = props.datas

  let isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

  return (
    <article>
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

export default ArticleContent
