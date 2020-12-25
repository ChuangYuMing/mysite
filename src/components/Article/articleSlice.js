import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import articleApi from '../../api/articleApi'

export const getArticle = createAsyncThunk(
  'article/getArticle',
  async (url, thunkAPI) => {
    const response = await articleApi.getArticle(url)
    return response
  }
)

const articleSlice = createSlice({
  name: 'article',
  initialState: {
    datas: {},
    isFetching: 'idle'
  },
  reducers: {},
  extraReducers: {
    [getArticle.pending]: (state, action) => {
      state.isFetching = 'pending'
    },
    [getArticle.fulfilled]: (state, action) => {
      state.datas = action.payload
      state.isFetching = 'fulfilled'
    }
  }
})

export default articleSlice.reducer
