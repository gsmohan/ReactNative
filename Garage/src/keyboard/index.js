
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ChatScreen from './ChatScreen'

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

class Wrapper extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Keyboard Related Works !</Text>
                <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('chatRoute')}>
                    <Text style={styles.instructions}>Chat Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const Navigatior = createStackNavigator({
    initialRoute: {
        screen: Wrapper,
        navigationOptions: { header: null }
    },
    chatRoute: {
        screen: ChatScreen,
        navigationOptions: { header: null }
    }
})

export default createAppContainer(Navigatior)
