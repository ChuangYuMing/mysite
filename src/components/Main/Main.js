import React, { Component } from 'react'
import styles from './main.css'
import classNames from 'classnames/bind'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Article from '../Article/Article'
// import Aside from '../Aside/Aside'
import PrivacyPolicy from '../Legal/PrivacyPolicy'
import Terms from '../Legal/Terms'
import Contact from '../Legal/Contact'
import Pages from '../Pages/Pages'
import { Route, Switch, Redirect } from 'react-router-dom'

let cx = classNames.bind(styles)
class Main extends Component {
  constructor() {
    super()
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <main className={cx('wrapper')}>
        <Navbar />
        <div className={cx('container')}>
          <Switch>
            <Route exact strict path="/:url*" render={props => <Redirect to={`${props.location.pathname}/`}/>} />
            <Route exact path="/" component={Pages} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/:category" component={Pages} />
            <Route path="/:category/:url" component={Article} />
          </Switch>
          {/* <Aside /> */}
        </div>
        <Footer />
      </main>
    )
  }
}

export default Main
