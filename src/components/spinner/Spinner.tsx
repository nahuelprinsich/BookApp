import React from "react";
import { View, Animated, Easing } from 'react-native';

import styles from './styles';

const Spinner = () => {
    
    let spinValue = new Animated.Value(0);

    Animated.loop(
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        )
    ).start();
    

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.container}>
            <View style={styles.spinnerPosition}>
                <Animated.Image 
                    source={require('../../assets/images/book.png')} 
                    style={{width: 100, height: 100, transform: [{rotate: spin}]}}
                />
            </View>
        </View>
    )
}



export default Spinner