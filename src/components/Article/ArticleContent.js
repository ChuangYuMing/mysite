import React, { useEffect, useState } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import TopImage from './TopImage/TopImage'
import MetaTag from './MetaTag/MetaTag'

let cx = classNames.bind(styles)

function ArticleContent(props) {
  let { title, content, url, jpg_base64 } = props.datas

  let isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

  return (
    <article>
      <h1 className={cx('title')}>{title}</h1>
      <div className={cx('top-image')}>
        <TopImage type={isChrome ? 'webp' : 'jpg'} url={url} title={title}  base64={jpg_base64}/>
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
