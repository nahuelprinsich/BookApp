import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BookApi } from '../../services/book'
import { AuthorApi } from '../../services/author';

export const searchBooks = createAsyncThunk(
  'book/searchBooks',
  async (params, thunkApi) => {
    try {
      const response = await BookApi.searchBooks(params);
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
    
  }
)

export const getDescriptionByKey = createAsyncThunk(
  'book/getDescriptionByKey',
  async (key: string, thunkApi) => {
    try {
      const response = await BookApi.getDescriptionByKey(key);
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
    
  }
)

export const getBioByKey = createAsyncThunk(
  'book/getBioByKey',
  async (key: string, thunkApi) => {
    try {
      const response = await AuthorApi.getBioByKey(key);
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
    bookSelected: {},
    lastBook: false,
    status: null,
    error: null,
    message: null,
    loading: false,
  },
  reducers: {
    resetSearch: (state, action) => {
      state.lastBook = action.payload;
      state.books = [];
    },

    setBookSelected: (state, action) => {
      state.bookSelected = action.payload;
    }
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
        if(action.payload.data.lenght === 0){
          state.lastBook = true
        }
        state.books = [...state.books, ...action.payload.data]
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
    },

    [getDescriptionByKey.pending]: (state, action) => {
      if (state.loading === false) {
        state.loading = true
      }
    },
    [getDescriptionByKey.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false
        state.bookSelected = { ...state.bookSelected, description: action.payload.data }
        state.status = action.payload.status
        state.message = action.payload.message
      }
    },
    [getDescriptionByKey.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false
        state.error = action.payload.error
        state.status = action.payload.status
        state.message = action.payload.message
      }
    },

    [getBioByKey.pending]: (state, action) => {
      if (state.loading === false) {
        state.loading = true
      }
    },
    [getBioByKey.fulfilled]: (state, action) => {
      if (state.loading === true) {
        state.loading = false
        let book = { ...state.bookSelected }
        book.author.bio = action.payload.data
        debugger
        state.bookSelected = book
        state.status = action.payload.status
        state.message = action.payload.message
      }
    },
    [getBioByKey.rejected]: (state, action) => {
      if (state.loading === true) {
        state.loading = false
        state.error = action.payload.error
        state.status = action.payload.status
        state.message = action.payload.message
      }
    }

  }
})

export const { resetSearch, setBookSelected } = bookSlice.actions;
export default bookSlice.reducer