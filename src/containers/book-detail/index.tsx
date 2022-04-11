import React, { useEffect } from 'react';
import { View } from 'react-native';


import { BookDetail, Spinner, Alert } from '../../components';
import { useBook } from '../../hooks/useBook';
import styles from './styles';

const BookDetailContainer = ({ route }) => {

    const { loading, error, getBookData } = useBook();

    const { book } = route.params;

    useEffect(() => {
        if(!!book){
            getBookData(book);
        }
    }, [book]);

    return (
        <View style={styles.container}>
            { 
                loading && <Spinner/> 
            }
            {
                !loading && error &&
                <Alert/>
            }
            <BookDetail/>
        </View>
    )
}

export default BookDetailContainer