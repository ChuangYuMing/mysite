import axios from 'axios'
import { createAction, handleActions } from 'redux-actions'
import { CHANGE_GET_PAGES_STATUS, UPDATE_PAGES } from '../actions/actionTypes'

const updatePages = createAction(UPDATE_PAGES, updates => updates)

export const changeGetPagesStatus = createAction(
  CHANGE_GET_PAGES_STATUS,
  updates => updates
)

export const getPagesAsync = category => {
  return (dispatch, getState) => {
    dispatch(changeGetPagesStatus({ isFetching: true }))
    category = category ? category : 'all'
    axios
      .get(`http://localhost:3000/api/pages/${category}`)
      .then(res => {
        dispatch(
          updatePages({
            datas: res.data.results,
            isFetching: false
          })
        )
      })
      .catch(() => {
        dispatch(changeGetPagesStatus({ isFetching: false }))
      })
  }
}

const initialState = {
  datas: [],
  isFetching: false
}
export default handleActions(
  {
    [changeGetPagesStatus]: (state, action) => ({
      ...state,
      ...action.payload
    }),
    [updatePages]: (state, action) => ({
      ...state,
      ...action.payload
    })
  },
  initialState
)
