import React, { useState } from 'react';
import { View } from 'react-native';

import { useBook } from '../../hooks/useBook';
import { SearchBar, Spinner, BookList, Alert } from '../../components/';

const BookListContainer = () => {

    const [ searchText, setSearchText ] = useState<string>('');
    const { books, loading, error } = useBook();

    return (
        <View>
            <SearchBar searchText={searchText} setSearchText={setSearchText}/>
            {
                loading && books.length === 0 ? 
                    <Spinner/> 
                : 
                    <BookList searchText={searchText}/>
            }
            {
                !loading && error &&
                <Alert/>
            }
        </View>
    )
}

export default BookListContainer