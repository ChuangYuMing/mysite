import React, { useEffect, useState } from 'react'
import TopImage from './TopImage/TopImage'
import MetaTag from './MetaTag/MetaTag'
import styled from 'styled-components'

const Title = styled.h1`
  margin-top: 30px;
  font-size: 2rem;

  @media screen and (max-width: 812px) {
    font-size: 1.8rem;
    height: 140px;
  }
`

const TopImageWrapper = styled.div`
  text-align: center;
  margin: 0 auto 30px;
  width: 730px;
  height: 484px;

  @media screen and (max-width: 812px) {
    width: 280px;
    height: 185.6438356164px;
  }
`

const Content = styled.div`
  font-size: 1.125rem;
  word-wrap: break-word;

  a {
    border-bottom: solid 2px #fb3a00;
  }

  @media screen and (max-width: 812px) {
    img {
      max-width: 280px;
      max-height: 185px;
    }
  }
`

function ArticleContent(props) {
  let { title, content, url, jpg_base64 } = props.datas

  let isChrome =
    !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

  return (
    <article>
      <Title>{title}</Title>
      <TopImageWrapper>
        <TopImage
          type={isChrome ? 'webp' : 'jpg'}
          url={url}
          title={title}
          base64={jpg_base64}
        />
      </TopImageWrapper>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
      <MetaTag data={props.datas} />
    </article>
  )
}

export default ArticleContent
