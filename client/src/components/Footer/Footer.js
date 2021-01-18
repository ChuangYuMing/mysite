import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import Box from '@src/components/Common/Box'
import css from '@styled-system/css'
import { breakpoints } from '@src/components/AppProvider/theme'

const Wrapper = styled(Box)(
  css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    bg: 'black'
  })
)

const Logo = styled('span')(
  css({
    display: 'inline-block',
    ml: [3, null, 4],
    fontSize: [30, null, 6],
    color: 'white'
  })
)

const Links = styled(Box)(
  css({
    display: 'flex',
    flexDirection: 'column',
    [`@media(min-width: ${breakpoints[1]})`]: {
      flexDirection: 'row'
    }
  })
)

const FooterLink = styled(Link)(
  css({
    display: 'inline-flex',
    height: 48,
    alignItems: 'center',
    color: 'white',
    fontSize: 3,
    mr: [3, null, 4]
  })
)

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
          <FooterLink to="/contact/" aria-label="Contact">
            Contact
          </FooterLink>
          <FooterLink to="/privacy-policy/" aria-label="Privacy Policy">
            Privacy Policy
          </FooterLink>
          <FooterLink to="/terms/" aria-label="Terms">
            Terms & Conditions
          </FooterLink>
        </Links>
      </Wrapper>
    </>
  )
}

export default withRouter(Footer)
