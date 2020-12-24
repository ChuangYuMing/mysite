import { combineReducers } from 'redux'
import pages from './pages2'
import article from './article'

const rootReducer = combineReducers({
  pages,
  article
})

export default rootReducer
