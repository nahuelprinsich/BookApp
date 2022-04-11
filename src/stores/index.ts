import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './book';

const bookPersistConfig = {
    key: 'book',
    storage: AsyncStorage,
    whitelist: ['books'],
}

const reducers = combineReducers({
    book: persistReducer(bookPersistConfig, bookReducer)
});

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: false,
        });

        if (__DEV__ && !process.env.JEST_WORKER_ID) {
            const createDebugger = require('redux-flipper').default;
            middlewares.push(createDebugger());
        }

        return middlewares
    },
})

const persistor = persistStore(store);

export { store, persistor }
