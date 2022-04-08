import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookList = () => {

    const [ bookList, setBookList ] = useState(['book1', 'book 2']);
    const [ searchText, setSearchText ] = useState()

    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <Text>{item}</Text>
        );
    }

    return (
        <View>
            <View>
            <TextInput
                onChangeText={() => setSearchText(searchText)}
                value={searchText}
            /> 
            <Button title='Detail' onPress={() => navigation.navigate('BookDetail')}/>
            </View>
            <FlatList
                data={bookList}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </View>
    )
}

export default BookList