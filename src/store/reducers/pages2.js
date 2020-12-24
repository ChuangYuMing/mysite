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
    isFetching: false
  },
  reducers: {},
  extraReducers: {
    [getPagesByCategory.fulfilled]: (state, action) => {
      state.datas = action.payload
    }
  }
})


export default pagesSlice.reducer