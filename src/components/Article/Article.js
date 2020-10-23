import React, { Component } from 'react'
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
    let { title, content, url, error } = this.props.datas
    let { url: browserUrl } = this.props.match.params

    if (error === 1) {
      return <NotFound />
    }

    if (url !== browserUrl || this.props.isFetching) {
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
          <TopImage type={isChrome ? 'webp' : 'jpg'} url={url} title={title}/>
        </div>
        <div
          className={cx('content')}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <MetaTag data={this.props.datas} />
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
