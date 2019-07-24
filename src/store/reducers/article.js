import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import {
  CHANGE_GET_ARTICLE_STATUS,
  UPDATE_ARTICLE
} from '../actions/actionTypes'

const updateArticle = createAction(UPDATE_ARTICLE, updates => updates)

export const changeGetArticleStatus = createAction(
  CHANGE_GET_ARTICLE_STATUS,
  updates => updates
)

export const getArticleAsync = url => {
  return (dispatch, getState) => {
    dispatch(changeGetArticleStatus({ isFetching: true }))
    axios
      .get(`http://localhost:3000/api/article?url=${url}`)
      .then(res => {
        dispatch(
          updateArticle({
            datas: res.data.results,
            isFetching: false
          })
        )
      })
      .catch(() => {
        dispatch(changeGetArticleStatus({ isFetching: false }))
      })
  }
}

const initialState = {
  datas: {},
  isFetching: false
}
export default handleActions(
  {
    [changeGetArticleStatus]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [updateArticle]: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
)
