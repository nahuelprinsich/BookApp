import React from "react";
import { View, FlatList, TouchableOpacity, Text, ActivityIndicator, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useBook } from "../../hooks/useBook";
import styles from './styles';
import { Line } from "../";
import { Book } from "../../services/models";

const BookList = ({searchText} : {searchText: string}) => {

    const { loading, books, page, search } = useBook();

    const navigation = useNavigation();

    const renderBook = ({ item } : {item: Book}) => {
        return (
            <>
                <TouchableOpacity 
                    style={styles.item}
                    onPress={() => navigation.navigate('BookDetail', { book: item })}
                >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.author.name}</Text>
                    <Text style={styles.year}>{item.publishYear}</Text>
                </TouchableOpacity>
                <Line/>
            </>
        );
    };

    return (
        <>
            {
                books.length === 0 &&
                <View style={styles.emptyContainer}>
                    <Image 
                        source={require('../../assets/images/book.png')} 
                        style={styles.image}
                    />
                    <Text style={styles.emptyText}>Start searching..</Text>
                </View>
            }
            <FlatList
                data={books}
                renderItem={renderBook}
                keyExtractor={item => item.key}
                onEndReached={() => search(searchText, page + 1)}
                style={styles.list}
            />
            { 
                loading && 
                <View style={styles.spinnerContainer}>
                    <ActivityIndicator size="small" color="white"/>
                </View>
            }
        </>
    )
}

export default BookList