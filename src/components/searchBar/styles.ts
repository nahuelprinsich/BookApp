import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: { 
        width: windowWidth,
        height: 50,
        backgroundColor: 'grey',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    input: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 20,
        alignItems: 'center', 
        paddingLeft: 10
    },
    image: {
        width: 15,
        height: 15
    },
    text: {
        flex: 1
    }
});

export default styles