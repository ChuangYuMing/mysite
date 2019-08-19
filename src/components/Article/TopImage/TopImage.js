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

  componentDidMount() {
    if (navigator.userAgent != 'ReactSnap') {
      let { type = 'jpg', url } = this.props
      let img = new Image()
      let bigImageUrl = `${CDN_DOMAIN}/${url}/${url}.${type}`

      img.addEventListener('load', () => {
        this.myRef.current.src = bigImageUrl
        this.myRef.current.alt = this.props.title
        this.myRef.current.classList.remove(styles.blur)
      })

      img.src = bigImageUrl
    }
  }

  render() {
    let { url, title } = this.props
    return (
      <img
        className={cx('thumb', 'blur')}
        ref={this.myRef}
        src={`${CDN_DOMAIN}/${url}/${url}-thumb.jpg`}
        alt={title}
      />
    )
  }
}

export default TopImage
