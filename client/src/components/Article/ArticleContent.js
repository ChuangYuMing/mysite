import React, { useEffect, useState } from 'react'
import TopImage from './TopImage/TopImage'
import MetaTag from './MetaTag/MetaTag'
import styled from 'styled-components'
import Box from '@src/components/Common/Box'
import css from '@styled-system/css'

const Title = styled('h1')(
  css({
    mt: 4,
    fontSize: [4, null, 5],
    height: [120, null, 'initial']
  })
)

const TopImageWrapper = styled(Box)(
  css({
    width: [280, null, 730],
    height: [186, null, 484],
    mb: 4,
    mx: 'auto',
    textAlign: 'center'
  })
)

const Content = styled(Box)(
  css({
    fontSize: 3,
    wordWrap: 'break-word',

    a: {
      borderBottom: 'solid 2px',
      borderColor: 'accentLighter',
      color: 'unset'
    },

    ul: {
      pl: 3,
      listStyleType: 'disc'
    },

    figure: {
      m: 0,
      textAlign: 'center'
    },

    img: {
      maxWidth: [280, null, 'initial'],
      maxHeight: [185, null, 'initial']
    }
  })
)

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
