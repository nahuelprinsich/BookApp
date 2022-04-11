import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { BookApi } from '../../services/book';
import { AuthorApi } from '../../services/author';

export const searchBooks = createAsyncThunk(
    'book/searchBooks',
    async (params, thunkApi) => {
        try {
            const response = await BookApi.searchBooks(params);
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
        
    }
)

export const getData = createAsyncThunk(
    'book/getData',
    async (params, thunkApi) => {
        try {
            const responseDescription = await BookApi.getDescriptionByKey(params.bookKey);
            const responseBio = await AuthorApi.getBioByKey(params.authorKey);
            return {
                description: responseDescription.data, 
                bio: responseBio.data
            }
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

        [getData.pending]: (state, action) => {
            if (state.loading === false) {
                state.loading = true
            }
        },

        [getData.fulfilled]: (state, action) => {
            if (state.loading === true) {
                state.loading = false
                let book = { ...state.bookSelected }
                book.author.bio = action.payload.bio
                book.description = action.payload.description
                state.bookSelected = book
                state.status = action.payload.status
                state.message = action.payload.message
            }
        },
        
        [getData.rejected]: (state, action) => {
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