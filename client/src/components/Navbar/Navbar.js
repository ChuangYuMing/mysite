import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import MenuBtn from './MenuBtn/MenuBtn'
import styled from 'styled-components'
import MainIcon from './MainIcon/MainIcon'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 85px;
  padding: 20px 0 20px 250px;
  border-bottom: solid 2px #ccc;
  background-color: #f9f9f9;

  @media screen and (max-width: 812px) {
    display: none;
  }
`
const Categories = styled.nav`
  display: inline-flex;
  margin-left: 50px;
  font-size: 20px;
`

const Category = styled(Link)`
  display: inline-block;
  position: relative;
  margin-right: 40px;
  color: #111;
  &:hover {
    &::before {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      content: '';
      background-color: #041377;
    }
  }
`

const MobileWrapper = styled.nav`
  width: 100%;
  height: 85px;
  padding: 20px;
  border-bottom: solid 2px #636363;

  @media screen and (min-width: 813px) {
    display: none;
  }
`

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title {
    display: inline-block;
    font-size: 20px;
    letter-spacing: 5px;
  }
`

const MobileCategory = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 150px;
  height: 100vh;
  background: black;
  transition: transform 0.5s;
  z-index: 1;
  transform: ${props => props.openMenu ? "translateX(0);" : "translateX(150px)"};

  a {
    display: inline-block;
    width: 100%;
    padding: 20px 20px;
    color: #fff;

    &:active {
      background-color: #555c9a;
    }
  }

  .links {
    margin-top: 80px;
  }

  .menu {
    position: absolute;
    right: 20px;
    top: 25px;
  }
`

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
          <span className="title">ChildBen</span>
          <MenuBtn onClick={toggleMenu} color="#000" />
        </TopWrapper>
        <MobileCategory openMenu={openMenu}>
          <MenuBtn className="menu" onClick={toggleMenu} color="#fff" />
          <div className="links" onClick={toggleMenu}>
            {Links}
          </div>
        </MobileCategory>
      </MobileWrapper>
    </>
  )
}

export default withRouter(Navbar)
