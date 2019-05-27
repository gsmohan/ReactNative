/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import KeyboardScreen from './keyboard'



class InitialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Garage !</Text>
        <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('keyboardRelatedRoute')}>
          <Text style={styles.instructions}>KeyBord Experiments</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const Navigatior = createStackNavigator({
  initialRoute: {
    screen: InitialScreen,
    navigationOptions: { header: null }
  },
  keyboardRelatedRoute: {
    screen: KeyboardScreen,
  }
})

export default createAppContainer(Navigatior);

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
