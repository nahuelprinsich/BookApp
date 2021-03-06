import React from "react";
import { View, ScrollView, Image, Text } from 'react-native';
import Config from 'react-native-config';

import { useBook } from "../../hooks/useBook";
import { Line } from "../";
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
                <Line/>
                <Text style={styles.text}>{'Published in: ' + bookSelected.publishYear}</Text>
                <Line/>
                <Text style={styles.subtitle}>Description</Text>
                <Text style={styles.lightText}>{bookSelected.description || 'Description not available'}</Text>
                <Line/>
                <Text style={styles.subtitle}>Author</Text>
                <Text style={styles.lightText}>{bookSelected.author && bookSelected.author.name && bookSelected.author.name || 'Author not available'}</Text>
                <Line/>
                <Text style={styles.subtitle}>Bio</Text>
                <Text style={styles.bio}>{bookSelected.author && bookSelected.author.bio && bookSelected.author.bio || 'Bio not available'}</Text>
            </View>
        </ScrollView>
    )
}

export default BookDetail