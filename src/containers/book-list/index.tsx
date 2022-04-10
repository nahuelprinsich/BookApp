import React, { useState } from 'react';
import { View } from 'react-native';

import { useBook } from '../../hooks/useBook';
import SearchBar from '../../components/searchBar/SearchBar';
import BookList from '../../components/BookList/BookList';
import Spinner from '../../components/spinner/Spinner';

const BookListContainer = () => {

    const [ searchText, setSearchText ] = useState('')
    const { books, loading } = useBook();

    return (
        <View>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            {
                loading && books.length === 0 ? <Spinner/> : <BookList searchText={searchText}/>
            }
        </View>
    )
}

export default BookListContainer