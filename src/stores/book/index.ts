import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookApi } from '../../services/book'

export const searchBooks = createAsyncThunk(
  'book/searchBooks',
  async (name: string, thunkApi) => {
    try {
      const response = await BookApi.searchBooks(name);
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
    
  }
)

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    books: [],
    status: null,
    error: null,
    message: null,
    loading: false,
  },
  reducers: {
    
  },
  extraReducers: {
    [searchBooks.pending]: (state, action) => {
      if (state.loading === false) {
        state.loading = true
      }
    },
    [searchBooks.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false
        state.books = action.payload.data
        state.status = action.payload.status
        state.message = action.payload.message
      }
    },
    [searchBooks.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false
        state.error = action.payload.error
        state.status = action.payload.status
        state.message = action.payload.message
      }
    }
  }
})

export default bookSlice.reducer