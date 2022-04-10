import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: 'grey', 
        paddingTop: 80
    },
    bookImage: {
        width: 150, 
        height: 200, 
        marginTop: -60, 
        marginBottom: 50
    },
    dataContainer: {
        backgroundColor: '#f1f1f1', 
        width: windowWidth, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        marginTop: -30,
        alignItems: 'center', 
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 5
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        color: 'grey'
    },
    line: { 
        borderBottomColor: '#333333', 
        borderBottomWidth: 1, 
        width: '40%', 
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    text: {
        fontWeight: 'bold',
        color: 'grey'
    },
    subtitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'grey'
    },
    bio: {
        marginBottom: 20,
        color: 'grey'
    },
    lightText: {
        color: 'grey'
    }
});

export default styles