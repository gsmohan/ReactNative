
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


class Wrapper extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Live Stream !</Text>
            </View>
        )
    }
}

export default Wrapper


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btn: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        textAlign: 'center'
    }
});