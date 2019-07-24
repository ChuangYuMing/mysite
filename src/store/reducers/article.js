import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import {
  CHANGE_GET_ARTICLE_STATUS,
  UPDATE_ARTICLE
} from '../actions/actionTypes'
import { API_DOMAIN, LOCAL_API_DOMAIN } from '../../constant'

const updateArticle = createAction(UPDATE_ARTICLE, updates => updates)
let apiDomain = PRODUCTION ? API_DOMAIN : LOCAL_API_DOMAIN

export const changeGetArticleStatus = createAction(
  CHANGE_GET_ARTICLE_STATUS,
  updates => updates
)

export const getArticleAsync = url => {
  return (dispatch, getState) => {
    dispatch(changeGetArticleStatus({ isFetching: true }))
    axios
      .get(`${apiDomain}/api/article?url=${url}`)
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
