import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height, 
        opacity: 0.5, 
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center'
    },
    spinnerPosition: {
        position: 'absolute', 
    },
});

export default styles