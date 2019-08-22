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
      category,
      modified_time
    } = this.props.datas
    let { url: browserUrl } = this.props.match.params
    let isChrome =
      !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

    modified_time = modified_time ? modified_time : date
    return (
      <article className={cx('wrapper')}>
        <h1 className={cx('title')}>{title}</h1>
        <TopImage type={isChrome ? 'webp' : 'jpg'} url={url} />
        <div
          className={cx('content')}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@ChildBen" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content="@ChildBen" />
          <meta
            name="twitter:image:src"
            content={`https://cdn.childben.com/${url}/${url}.jpg`}
          />

          <meta property="og:title" content={title} />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={`https://www.childben.com/${category}/${url}`}
          />
          <meta
            property="og:image"
            content={`https://cdn.childben.com/${url}/${url}.jpg`}
          />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content="ChildBen" />
          <meta property="article:published_time" content={date} />
          <meta property="article:modified_time" content={modified_time} />
          <meta property="fb:admins" content="100031410993377" />

          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": "${title}",
                "image": "https://cdn.childben.com/${url}/${url}.jpg",
                "editor": "Child Ben",
                "keywords": "${keywords}",
                "url": "https://www.childben.com/${category}/${url}",
                "datePublished": "${date}",
                "dateCreated": "${date}",
                "dateModified": "${modified_time}",
                "description": "${description}",
                "publisher": {
                  "@type": "Organization",
                  "name": "Blog Name",
                  "url": "https://www.childben.com",
                  "logo": {
                  	"@type": "ImageObject",
                    "url": "https://www.childben.com/static/images/android-icon-96x96.png",
                    "width": 96,
                    "height": 96
                  }
                },
                "mainEntityOfPage": "https://www.childben.com/${category}/${url}",
                "author": {
                  "@type": "Person",
                  "name": "ChildBen"
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
