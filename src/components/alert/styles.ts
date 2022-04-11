import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'absolute', 
        left: '9%', 
        top: '30%'
    },
    modal: {
        backgroundColor: 'white', 
        margin: 20, 
        borderColor: 'grey', 
        borderWidth: 1, 
        borderRadius: 10,
        width: 300
    },
    text: {
        padding: 5,
        textAlign: 'center', 
        marginTop: 20,
        color: 'grey',
        fontWeight: 'bold',
        fontSize: 15
    },
    button: {
        width: 200, 
        alignSelf: 'center', 
        margin: 20,
    }
});

export default styles