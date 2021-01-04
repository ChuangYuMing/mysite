import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Article from '../Article/Article'
// import Aside from '../Aside/Aside'
import PrivacyPolicy from '../Legal/PrivacyPolicy'
import Terms from '../Legal/Terms'
import Contact from '../Legal/Contact'
import Pages from '../Pages/Pages'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #3e3d3d;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  min-height: 350px;
  margin: 0 auto;
`

function Main() {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Switch>
          <Route
            exact
            strict
            path="/:url*"
            render={(props) => <Redirect to={`${props.location.pathname}/`} />}
          />
          <Route exact path="/" component={Pages} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/:category" component={Pages} />
          <Route path="/:category/:url" component={Article} />
        </Switch>
        {/* <Aside /> */}
      </Container>
      <Footer />
    </Wrapper>
  )
}

export default Main
