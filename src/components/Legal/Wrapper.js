import React, { useEffect } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 730px;
  margin: 40px auto;

  @media screen and (max-width: 812px) {
    padding: 20px;
    max-width: 100vw;
  }
`

function Wrapper(props) {
  return <Box>{props.children}</Box>
}

export default Wrapper
