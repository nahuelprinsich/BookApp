import React, { useState } from 'react';
import { View } from 'react-native';

import { useBook } from '../../hooks/useBook';
import { SearchBar, Spinner, BookList } from '../../components/';

const BookListContainer = () => {

    const [ searchText, setSearchText ] = useState('');
    const { books, loading } = useBook();

    return (
        <View>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            {
                loading && books.length === 0 ? 
                    <Spinner/> 
                : 
                    <BookList searchText={searchText}/>
            }
        </View>
    )
}

export default BookListContainer