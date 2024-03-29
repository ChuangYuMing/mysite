import React, { useEffect, useState } from 'react'
import { sendPageView } from '../../utils/tracking'
import LoadingBtn from '../Common/LoadingBtn/LoadingBtn'
import NotFound from '../NotFound/NotFound'
import { useLocation } from 'react-router-dom'
import ArticleContent from './ArticleContent'
import StaticContent from '../StaticContent'
import { getArticle } from './articleSlice'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import Box from '@src/components/Common/Box'
import css from '@styled-system/css'


const Wrapper = styled(Box)(
  css({
    flex: '1 1 auto',
    maxWidth: ['100vw', null, 730],
    mb: 4,
    mx: 'auto',
    p: [3, null, 0],
  })
)

function Article(props) {
  let { url: browserUrl } = props.match.params
  const { datas, isFetching } = useSelector((state) => state.article)
  const location = useLocation()
  const dispatch = useDispatch()
  let { title, content, url, error } = datas
  const [firstRender, setFirstRender] = useState(true) // prerender
  const isServerPrerender = navigator.userAgent === 'ReactSnap'
  const isFromOtherPath = location.state && location.state.fromOtherPath

  useEffect(() => {
    if (isFromOtherPath || !PRODUCTION || isServerPrerender) {
      dispatch(getArticle(browserUrl))
    }
    sendPageView(browserUrl)
    setFirstRender(false)
  }, [browserUrl])

  if (error === 1) {
    return <NotFound />
  }

  if (
    (isFromOtherPath && url !== browserUrl) ||
    isFetching === 'pending' ||
    (firstRender && isServerPrerender && url !== browserUrl)
  ) {
    return (
      <Wrapper>
        <LoadingBtn />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <StaticContent>
        <ArticleContent datas={datas} />
      </StaticContent>
    </Wrapper>
  )
}

export default Article
