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

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  min-height: calc(100vh - 85px);
`

const Items = styled.div`
  margin: 10px auto 0 auto;
  padding: 20px;

  @media screen and (max-width: 812px) {
    width: 100%;
    padding: 0;
  }
`

const Item = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  font-size: 30px;
  border: 1px solid #e9e9e9;
  cursor: pointer;
  padding: 20px 15px;
  border-bottom: 0;

  @media screen and (max-width: 812px) {
    font-size: 15px;
  }

  img {
    width: 100px;
    height: 100px;
  }

  a {
    margin-left: 10px;
    text-overflow: ellipsis;
    color: #4c4c4ce3;
  }

  &:hover {
    a {
      color: #9a4b4b;
    }
  }
`

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
      <Item key={item.title}>
        <img
          src={`${CDN_DOMAIN}/${item.url}/${item.url}-thumb.jpg`}
          alt={item.title}
        />
        <Link
          to={{
            pathname: `/${item.category}/${item.url}/`,
            state: { fromOtherPath: true }
          }}
        >
          {item.title}
        </Link>
      </Item>
    )
  })

  return (
    <StaticContent>
      <Wrapper>
        <Items>{rows}</Items>
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
