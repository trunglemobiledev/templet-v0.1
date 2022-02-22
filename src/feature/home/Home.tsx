import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../contants';
import { HOME_STACK } from '../../navigation/config/routes'
import { HomeStackParams } from '../../navigation/scenen/TabScnens';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<HomeStackParams, 'Home'>;

/**
 * get param value in navigate "route.params.name"
 *
 */
const Home = ({ route, navigation }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Home
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(HOME_STACK.LOGIN)}>
                <Text>
                    To login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(HOME_STACK.WELCOME)}>
                <Text>
                    To Home
                </Text>
            </TouchableOpacity>
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
        color: COLORS.backgroundTab
    }
})

export default Home;