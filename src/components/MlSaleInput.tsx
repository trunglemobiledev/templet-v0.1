import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../contants';

interface Props {
    name: string;
    onPress: (name: string) => void;
}

const MlSaleInput: React.FC<Props> = ({ name, onPress }) => {
    React.useEffect(() => { console.log("=============") }, [])
    return (
        <TouchableOpacity onPress={() => onPress(name)}>
            <View style={styles.container}>
                <Text>{name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        padding: 16,
        marginTop: 8,
    },
});

export default MlSaleInput;