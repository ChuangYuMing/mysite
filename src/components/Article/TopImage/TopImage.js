import React, { Component } from 'react'
import styles from './top-image.css'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles)
class TopImage extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  componentDidMount() {
    if (PRODUCTION && navigator.userAgent != 'ReactSnap') {
      let { type = 'jpg', url } = this.props
      let img = new Image()
      let bigImageUrl = `/static/images/${url}/${url}.${type}`

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
        src={require(`../../../assets/images/${url}/${url}-thumb.jpg`)}
        alt={title}
      />
    )
  }
}

export default TopImage
