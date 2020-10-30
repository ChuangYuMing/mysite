import React, { Component } from 'react'
import styles from './top-image.css'
import classNames from 'classnames/bind'
import { CDN_DOMAIN } from '../../../constant'

let cx = classNames.bind(styles)
class TopImage extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    let { url, title } = this.props
    let webp = `${CDN_DOMAIN}/${url}/${url}.webp`
    let jpg = `${CDN_DOMAIN}/${url}/${url}.jpg`

    return (
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img className={cx("top-image")} width="730" height="484"src={jpg} alt={title} />
      </picture>
    )
  }
}

export default TopImage
