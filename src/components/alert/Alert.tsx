import React, { useEffect, useState } from "react";
import { View, Text, Modal, Button } from 'react-native';

import { useBook } from "../../hooks/useBook";
import styles from './styles';

const Alert = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const { message, error } = useBook();

    useEffect(() => {
        if(error){
            setModalVisible(true);
        }
    }, [error])

    return (
        <Modal
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text style={styles.text}>OOPS..</Text>
                    <Text style={styles.text}>{message}</Text>
                    <View style={styles.button}>
                        <Button title="Continue" onPress={() => setModalVisible(false)} color={'grey'}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Alert