import React, { Component } from 'react'
import styles from './article.css'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { getArticleAsync } from '../../store/reducers/article'

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
    }
  }

  componentDidMount() {
    let { title: url } = this.props.match.params
    this.getArticle(url)
  }

  render() {
    console.log(this.props)
    let { title, content } = this.props

    if (!title) {
      return <article className={cx('wrapper')}></article>
    }

    return (
      <article className={cx('wrapper')}>
        <h2 className={cx('title')}>{title}</h2>
        <div
          className={cx('content')}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    )
  }
}

export default connect(
  state => ({
    content: state.article.datas.content,
    title: state.article.datas.title
  }),
  { getArticleAsync }
)(Article)
