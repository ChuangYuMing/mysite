import React, { Component } from 'react'
import styles from './main.css'
import classNames from 'classnames/bind'
import Navbar from '../Navbar/Navbar'
import Article from '../Article/Article'
import Aside from '../Aside/Aside'
import Pages from '../Pages/Pages'
import { Route, Switch } from 'react-router-dom'

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
            <Route exact path="/" component={Pages} />
            <Route exact path="/:category" component={Pages} />
            <Route path="/:category/:url" component={Article} />
          </Switch>
          <Aside />
        </div>
      </main>
    )
  }
}

export default Main
