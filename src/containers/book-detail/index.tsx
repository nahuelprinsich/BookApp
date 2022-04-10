import React, { useEffect } from 'react';
import { View } from 'react-native';

import BookDetail from '../../components/bookDetail/BookDetail';
import Spinner from '../../components/spinner/Spinner';
import { useBook } from '../../hooks/useBook';
import styles from './styles';

const BookDetailContainer = ({ route }) => {

    const { loading, getBookData } = useBook();

    const { book } = route.params;

    useEffect(() => {
        if(!!book){
            getBookData(book);
        }
    }, [book]);

    return (
        <View style={styles.container}>
            { loading && <Spinner/> }
            <BookDetail/>
        </View>
    )
}

export default BookDetailContainer