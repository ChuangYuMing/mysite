import { combineReducers } from 'redux'
import pages from '../../components/Pages/pagesSlice'
import article from '../../components/Article/articleSlice'

const rootReducer = combineReducers({
  pages,
  article
})

export default rootReducer
