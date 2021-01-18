import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import MenuBtn from './MenuBtn/MenuBtn'
import styled from 'styled-components'
import MainIcon from './MainIcon/MainIcon'
import Box from '@src/components/Common/Box'
import css from '@styled-system/css'
import { breakpoints } from '@src/components/AppProvider/theme'

const Wrapper = styled(Box)(
  css({
    display: 'none',
    alignItems: 'center',
    height: 85,
    pt: 20,
    pr: 0,
    pb: 20,
    pl: 250,
    borderBottom: 'solid 2px',
    borderColor: '#ccc',
    bg: 'greyLightest',
    [`@media(min-width: ${breakpoints[1]})`]: {
      display: 'flex'
    }
  })
)

const Categories = styled('nav')(
  css({
    display: 'inline-flex',
    ml: 5,
    fontSize: 3
  })
)

const Category = styled(Link)(
  css({
    display: 'inline-flex',
    position: 'relative',
    mr: 4,
    color: 'greyDarkestVariant',
    '&:hover': {
      '&::before': {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 2,
        content: "''",
        bg: 'primaryDark',
      }
    }
  })
)

const MobileWrapper = styled('nav')(
  css({
    width: '100%',
    height: 85,
    p: 3,
    borderBottom: 'solid 2px',
    borderColor: 'greyLightest',
    [`@media(min-width: ${breakpoints[1]})`]: {
      display: 'none'
    }
  })
)


const TopWrapper = styled(Box)(
  css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  })
)

const TopWrapperTitle = styled('span')(
  css({
    display: 'inline-block',
    fontSize: 3,
    letterSpacing: '5px'
  })
)

const MobileCategoryWrapper = styled(Box)(props => (
  css({
    position: 'fixed',
    top: 0,
    right: 0,
    width: 150,
    height: '100vh',
    bg: 'black',
    transition: 'transform .5s',
    zIndex: 1,
    transform: props.openMenu ? "translateX(0);" : "translateX(150px)",

    'a': {
      display: 'inline-block',
      width: '100%',
      padding: 3,
      color: '#fff',
  
      '&:active': {
        bg: '#555c9a',
      }
    },
  
    '.links': {
      mt: 5,
    },

    '.menu': {
      position: 'absolute',
      right: '20px',
      top: '25px',
    }
  })
))

function Navbar(props) {
  const [openMenu, setOpenMenu] = useState(false)

  function toggleMenu() {
    setOpenMenu(!openMenu)
  }

  const linksItems = [
    { href: 'finance', name: 'Finance' },
    { href: 'economics', name: 'Economics' },
    { href: 'investing', name: 'Investing' },
    { href: 'career', name: 'Career' },
    { href: 'trading', name: 'Trading' },
    { href: 'politics', name: 'Politics' },
    { href: 'history', name: 'History' }
  ]
  const Links = linksItems.map((link) => {
    return (
      <Category
        key={link.name}
        to={{
          pathname: `/${link.href}/`,
          state: { fromOtherPath: true }
        }}
        aria-label={link.name}
      >
        {link.name}
      </Category>
    )
  })

  return (
    <>
      <Wrapper>
        <MainIcon />
        <Categories>{Links}</Categories>
      </Wrapper>
      <MobileWrapper>
        <TopWrapper>
          <MainIcon />
          <TopWrapperTitle className="title">ChildBen</TopWrapperTitle>
          <MenuBtn onClick={toggleMenu} color="#000" />
        </TopWrapper>
        <MobileCategoryWrapper openMenu={openMenu}>
          <MenuBtn className="menu" onClick={toggleMenu} color="#fff" />
          <div className="links" onClick={toggleMenu}>
            {Links}
          </div>
        </MobileCategoryWrapper>
      </MobileWrapper>
    </>
  )
}

export default withRouter(Navbar)
