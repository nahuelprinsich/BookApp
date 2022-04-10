import React from "react"
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { useBook } from "../../hooks/useBook";
import styles from './styles';

const BookList = () => {

    const { books, page, searchText, search } = useBook();

    const navigation = useNavigation();

    const renderBook = ({ item }) => {
        return (
            <>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('BookDetail', { book: item })}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.author.name}</Text>
                    <Text style={styles.year}>{item.publishYear}</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
            </>
        );
    };

    return (
        <FlatList
            data={books}
            renderItem={renderBook}
            keyExtractor={item => item.key}
            onEndReached={() => search(searchText, page + 1)}
        />
    )
}

export default BookList