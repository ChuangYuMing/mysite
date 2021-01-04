import React, { Component } from 'react'
import { CDN_DOMAIN } from '../../../constant'
import styled from 'styled-components'

const Picture = styled.picture`
  img {
    height: auto;
    width: 100%;
  }
`

class TopImage extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    let { url, title, base64 } = this.props
    let webp = `${CDN_DOMAIN}/${url}/${url}.webp`
    let jpg = `${CDN_DOMAIN}/${url}/${url}.jpg`

    return (
      <Picture>
        {/* <source srcSet={webp} type="image/webp" /> */}
        <img width="730" height="484" src={base64} alt={title} />
      </Picture>
    )
  }
}

export default TopImage
