import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useBooks } from '../../hooks/useBooks';

const BookList = () => {

    const [ searchText, setSearchText ] = useState<string>();
    const [ page, setPage ] = useState<number>(1);
    const { books, loading, search } = useBooks();

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
                <Text >{item.title}</Text>
                <Text >{item.author.name}</Text>
                <Text >{item.publishYear}</Text>
                <Text>*******</Text>
            </TouchableOpacity>
        );
    };

    const searchBooks = (name: string, page: number) => {
        if(name && name.length > 3) {
            setPage(page);
            setSearchText(name);
            search(name.split(' ').join('+'), page);
        }
    }; 

    return (
        <View>
            <View>
                <TextInput
                    onChangeText={(value) => searchBooks(value, 1)}
                    value={searchText}
                /> 
            </View>
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                onEndReached={() => searchBooks(searchText, page + 1)}
            />
        </View>
    )
}

export default BookList