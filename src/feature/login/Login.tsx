import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../contants';

const Login: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Login
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    },
    text: {
        fontSize: 12,
        color: 'red'
    }
})

export default Login;