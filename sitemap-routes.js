import React from 'react'
import { Route } from 'react-router'

export default (
  <Route>
    <Route path="/" />
    <Route exact path="/terms" />
    <Route exact path="/privacy-policy" />
    <Route path="/:category" />
    <Route path="/:category/:url" />
  </Route>
)
