import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import { CDN_DOMAIN } from '../../constant'
import { getPagesByCategory, clearPages } from './pagesSlice'
import StaticContent from '../StaticContent'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Box from '@src/components/Common/Box'
import css from '@styled-system/css'

const Wrapper = styled(Box)(
  css({
    flex: '1 1 auto',
    width: '100%',
    minHeight: 'calc(100vh - 85px)'
  })
)

const Articles = styled(Box)(
  css({
    width: '100%',
    mt: 2,
    mx: 'auto',
    p: [0, null, 3]
  })
)

const Article = styled(Box)(
  css({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 120,
    p: 3,
    border: 'solid 1px',
    borderColor: 'greyLighter',
    cursor: 'pointer'
  })
)

const ArticleLogo = styled('img')(
  css({
    width: 100,
    height: 100
  })
)

const ArticleTitle = styled(Link)(
  css({
    textOverflow: 'ellipsis',
    fontSize: [4, null, 5],
    ml: 2,
    color: 'greyDarkestVariant',

    '&:hover': {
      color: 'accent'
    }
  })
)

function Pages(props) {
  let { category } = props.match.params
  const { datas: pages, isFetching } = useSelector((state) => state.pages)
  const location = useLocation()
  const dispatch = useDispatch()
  const [firstRender, setFirstRender] = useState(true)
  const isServerPrerender = navigator.userAgent === 'ReactSnap'
  const isFromOtherPath = location.state && location.state.fromOtherPath

  useEffect(() => {
    if (isFromOtherPath || !PRODUCTION || isServerPrerender) {
      dispatch(getPagesByCategory(category))
    }
    sendPageView(category)
    setFirstRender(false)
    return () => {
      dispatch(clearPages())
    }
  }, [category])

  if (isFetching === 'pending') {
    return (
      <Wrapper>
        <LoadingBtn />
      </Wrapper>
    )
  }

  let rows = pages.map((item) => {
    return (
      <Article key={item.title}>
        <ArticleLogo
          src={`${CDN_DOMAIN}/${item.url}/${item.url}-thumb.jpg`}
          alt={item.title}
        />
        <ArticleTitle
          to={{
            pathname: `/${item.category}/${item.url}/`,
            state: { fromOtherPath: true }
          }}
        >
          {item.title}
        </ArticleTitle>
      </Article>
    )
  })

  return (
    <StaticContent>
      <Wrapper>
        <Articles>{rows}</Articles>
        <Helmet>
          <title>
            ChildBen{category ? `(${category})` : ''}: Guiding you through
            financial world.
          </title>
          <meta
            name="description"
            content="ChildBen is the world's leading source of financial content on the web, ranging from market news to retirement strategies, investing, and trading."
          />
        </Helmet>
      </Wrapper>
    </StaticContent>
  )
}

export default Pages
