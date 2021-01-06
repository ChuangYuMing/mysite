import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  background-color: black;
`

const Logo = styled.span`
  display: inline-block;
  margin-left: 40px;
  font-size: 50px;
  color: white;

  @media screen and (max-width: 812px) {
    font-size: 30px;
    margin-left: 20px;
  }
`

const Links = styled.div`
  @media screen and (max-width: 812px) {
    display: flex;
    flex-direction: column;
  }

  a {
    display: inline-flex;
    height: 48px;
    align-items: center;
    color: white;
    font-size: 20px;
    margin-right: 40px;

    @media screen and (max-width: 812px) {
      margin-right: 20px;
    }
  }
`

function Footer() {
  return (
    <>
      <Wrapper>
        <Link
          to={{
            pathname: '/',
            state: { fromOtherPath: true }
          }}
          aria-label="Home"
        >
          <Logo>Child Ben</Logo>
        </Link>

        <Links>
          <Link to="/contact/" aria-label="Contact">
            Contact
          </Link>
          <Link to="/privacy-policy/" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
          <Link to="/terms/" aria-label="Terms">
            Terms & Conditions
          </Link>
        </Links>
      </Wrapper>
    </>
  )
}

export default withRouter(Footer)
