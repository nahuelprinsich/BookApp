import React from "react"
import { View, ScrollView, Image, Text } from 'react-native'
import Config from 'react-native-config';

import { useBook } from "../../hooks/useBook";
import styles from './styles';

const BookDetail = () => {

    const { bookSelected } = useBook();

    return (
        bookSelected &&
        <ScrollView>
            {
                bookSelected.isbn ? 
                <View style={styles.imageContainer}>
                    <Image source={{uri: Config.COVERAPI_HOST + `${bookSelected.isbn}-M.jpg`}} style={styles.bookImage} resizeMode={'contain'}/>
                </View>
                :
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/notAvailable.png')} style={styles.bookImage} resizeMode={'contain'}/>
                </View>
            }
            <View style={styles.dataContainer}>
                <Text style={styles.title}>{bookSelected.title}</Text>
                <View style={styles.line}></View>
                <Text style={styles.text}>{'Published in: ' + bookSelected.publishYear}</Text>
                <View style={styles.line}></View>
                <Text style={styles.subtitle}>Description</Text>
                <Text>{bookSelected.description || 'Description not available'}</Text>
                <View style={styles.line}></View>
                <Text style={styles.subtitle}>Author</Text>
                <Text>{bookSelected.author && bookSelected.author.name && bookSelected.author.name || 'Author not available'}</Text>
                <View style={styles.line}></View>
                <Text style={styles.subtitle}>Bio</Text>
                <Text style={styles.bio}>{bookSelected.author && bookSelected.author.bio && bookSelected.author.bio || 'Bio not available'}</Text>
            </View>
        </ScrollView>
    )
}

export default BookDetail