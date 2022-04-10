import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useBook } from '../../hooks/useBook';
import SearchBar from '../../components/searchBar/SearchBar';
import BookList from '../../components/BookList/BookList';
import Spinner from '../../components/spinner/Spinner';

const BookListContainer = () => {

    const { loading } = useBook();

    return (
        <View>
            <SearchBar/>
            {
                loading ? <Spinner/> : <BookList/>
            }
        </View>
    )
}

export default BookListContainer