import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import reducers from './reducers'

// const apiUrl = appGlobal.apiUrl
let something = ''

// const preloadedState = window.__PRELOADED_STATE__
// delete window.__PRELOADED_STATE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// const store = createStore(
//   reducers,
//   composeEnhancers(
//     applyMiddleware(thunk.withExtraArgument(something))
//   )
// )

const store = configureStore({
  reducer: reducers
})


// window.snapSaveState = () => {
//   document.querySelector('#root').setAttribute('data-server-rendered', 'true')
//   return {
//     __PRELOADED_STATE__: store.getState()
//   }
// }


export { store }
