import React from "react"
import { View, TextInput, Image } from 'react-native'

import { useBook } from "../../hooks/useBook";
import styles from './styles';

const SearchBar = ({searchText, setSearchText}) => {

    const { search } = useBook();

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Image source={require('../../assets/images/search.png')} style={styles.image}/>
                <TextInput
                    style={styles.text}
                    onChangeText={(value) => {
                        setSearchText(value)
                        search(value, 1)
                    }}
                    value={searchText}
                /> 
            </View>
        </View>
    )
}

export default SearchBar