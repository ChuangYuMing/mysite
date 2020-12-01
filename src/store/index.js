import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import reducers from './reducers'
import rootEpic from '../epics.js'

// const apiUrl = appGlobal.apiUrl
let something = ''

// const preloadedState = window.__PRELOADED_STATE__
// delete window.__PRELOADED_STATE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(something), epicMiddleware)
  )
)

// window.snapSaveState = () => {
//   document.querySelector('#root').setAttribute('data-server-rendered', 'true')
//   return {
//     __PRELOADED_STATE__: store.getState()
//   }
// }

epicMiddleware.run(rootEpic)

export { store }
