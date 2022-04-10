import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    item: { 
        width: windowWidth,
        alignItems: 'center', 
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'grey'
    },
    author: {
        textAlign: 'center',
        fontSize: 15,
        color: 'grey'
    },
    year: {
        textAlign: 'center',
        fontSize: 10,
        color: 'grey'
    },
    line: { 
        borderBottomColor: '#333333', 
        borderBottomWidth: 1, 
        width: '40%', 
        alignSelf: 'center',
        marginTop: 5
    },
    spinnerContainer: {
        position: 'absolute', 
        bottom: 0, 
        backgroundColor: 'grey', 
        height: 100, width: windowWidth, 
        justifyContent: 'center',
        paddingBottom: 50
    }
});

export default styles