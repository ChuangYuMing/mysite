import React, { Component } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getArticleAsync } from '../../store/reducers/article'
import { Helmet } from 'react-helmet'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import TopImage from './TopImage/TopImage'
import javascript from 'highlight.js/lib/languages/javascript'
import NotFound from '../NotFound/NotFound'

let cx = classNames.bind(styles)

class Article extends Component {
  constructor() {
    super()
  }

  getArticle(url) {
    this.props.getArticleAsync(url)
  }

  componentDidUpdate(prevProps) {
    let { url } = this.props.match.params
    let { url: preUrl } = prevProps.match.params
    if (url !== preUrl) {
      this.getArticle(url)
      sendPageView(url)
    }
  }

  componentDidMount() {
    let { url } = this.props.match.params

    // prerender已經有資料就不用再發request
    if (this.props.datas.url !== url) {
      this.getArticle(url)
    }
    sendPageView(url)
  }

  render() {
    if (url !== browserUrl || this.props.isFetching) {
      return (
        <article className={cx('wrapper')}>
          <LoadingBtn />
        </article>
      )
    }

    if (!this.props.isFetching && !this.props.datas.url) {
      return <NotFound />
    }

    let {
      title,
      content,
      description,
      keywords,
      url,
      date,
      category
    } = this.props.datas
    let { url: browserUrl } = this.props.match.params
    let isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
    return (
      <article className={cx('wrapper')}>
        <h2 className={cx('title')}>{title}</h2>
        <TopImage type={isChrome ? 'webp' : 'jpg'} url={url} />
        <div
          className={cx('content')}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "${title}",
                "image": "https://www.childben.com/static/images/${url}/${url}.jpg",
                "editor": "Child Ben",
                "keywords": "${keywords}",
                "url": "https://www.childben.com/${category}/${url}",
                "datePublished": "${date}",
                "dateCreated": "${date}",
                "dateModified": "${date}",
                "description": "${description}",
                "publisher": "Child Ben",
                "mainEntityOfPage": "https://www.childben.com/${category}/${url}",
                "author": {
                  "@type": "Person",
                  "name": "Child Ben"
                }
              }
          `}
          </script>
        </Helmet>
      </article>
    )
  }
}

export default connect(
  state => ({
    datas: state.article.datas,
    isFetching: state.article.isFetching
  }),
  { getArticleAsync }
)(Article)
