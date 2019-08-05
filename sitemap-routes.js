import React from 'react'
import { Route } from 'react-router'

export default (
  <Route>
    <Route path="/" />
    <Route path="/:category" />
    <Route path="/:category/:url" />
  </Route>
)
