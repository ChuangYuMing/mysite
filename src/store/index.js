import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import reducers from './reducers'
import rootEpic from '../epics.js'

// const apiUrl = appGlobal.apiUrl
let something = ''

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(something), epicMiddleware)
  )
)

epicMiddleware.run(rootEpic);

export { store }
