import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Wrapper = styled.div`
  flex: 1;
  font-size: 30px;
  text-align: center;
  padding-top: 50px;
`

function NotFound() {
  return (
    <>
      <Wrapper>Ooops page not found...</Wrapper>
      <Helmet>
        <title>404</title>
        <meta name="description" content="page not found" />
      </Helmet>
    </>
  )
}

export default NotFound
