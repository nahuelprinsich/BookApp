import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Config from 'react-native-config';

import { useBooks } from '../../hooks/useBooks';

const BookDetail = ({ route }) => {

    const { bookSelected, loading, getDescription } = useBooks();

    const { book } = route.params;

    useEffect(() => {
        if(!!book){
            getDescription(book);
        }
    }, [book]);

    return (
        <ScrollView>
            {
                bookSelected &&
                <View>
                    {
                        bookSelected.isbn && <Image source={{uri: Config.COVERAPI_HOST + `${bookSelected.isbn}-M.jpg`}} style={{width: 100, height: 100}}/>
                    }
                    <Text>***</Text>
                    <Text>{bookSelected.title}</Text>
                    <Text>***</Text>
                    <Text>{bookSelected.publishYear}</Text>
                    <Text>***</Text>
                    <Text>{bookSelected.description || ''}</Text>
                    <Text>***</Text>
                    <Text>{bookSelected.author && bookSelected.author.name && bookSelected.author.name}</Text>
                    <Text>***</Text>
                    <Text>{bookSelected.author && bookSelected.author.bio && bookSelected.author.bio}</Text>
                </View>
            }
        </ScrollView>
    )
}

export default BookDetail