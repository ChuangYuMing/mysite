import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import pagesApi from '../../api/pagesApi'

export const getPagesByCategory = createAsyncThunk(
  'pages/getPagesByCategory',
  async (category, thunkAPI) => {
    category = category ? category : 'all'
    const response = await pagesApi.getPagesByCategory(category)
    return response
  }
)

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    datas: [],
    isFetching: 'idle'
  },
  reducers: {
    clearPages(state, action) {
      state.datas = []
    }
  },
  extraReducers: {
    [getPagesByCategory.pending]: (state, action) => {
      state.isFetching = 'pending'
    },
    [getPagesByCategory.fulfilled]: (state, action) => {
      state.datas = action.payload
      state.isFetching = 'fulfilled'
    }
  }
})

export const { clearPages } = pagesSlice.actions
export default pagesSlice.reducer
