import React from 'react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyleLink = styled(Link)`
  height: 45px;
`
const Logo = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`
function MainIcon() {
  return (
    <StyleLink
      to={{
        pathname: '/',
        state: { fromOtherPath: true }
      }}
    >
      <Logo
        width="45"
        height="45"
        src={logo}
        alt="Logo"
      />
    </StyleLink>
  )
}

export default MainIcon