import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, SafeAreaView, ScrollView, Keyboard, Dimensions } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
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
    },
    filed: {
        left: 0,
        right: 0,
        height: 45,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    }

});

// export default class ChatScreen extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>Chat Screen </Text>
//             </View>
//         )
//     }
// }

export default class ChatScreen extends Component {
    render() {
        let ketBoardSpace = Platform.OS === 'ios' ? -30 : -280;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={[{ flex: 1 }]}>
                    {/* Some random image to show scaling */}
                    {/* <Image source={{ uri: 'http://img11.deviantart.net/072b/i/2011/206/7/0/the_ocean_cherry_tree_by_tomcadogan-d41nzsz.png', static: true }} style={{ flex: 1 }} /> */}
                    <ScrollView>
                        <Text style={{ height: 100 }}>Text 1</Text>
                        <Text style={{ height: 100 }}>Text 2</Text>
                        <Text style={{ height: 100 }}>Text 3</Text>
                        <Text style={{ height: 100 }}>Text 4</Text>
                        <Text style={{ height: 100 }}>Text 5</Text>
                        <Text style={{ height: 100 }}>Text 10</Text>
                        <Text style={{ height: 100 }}>Text 20</Text>
                        <Text style={{ height: 100 }}>Text 30</Text>
                        <Text style={{ height: 100 }}>Text 40</Text>
                        <Text style={{ height: 100 }}>Text 50</Text>
                        <Text style={{ height: 100 }}>Text 11</Text>
                        <Text style={{ height: 100 }}>Text 21</Text>
                        <Text style={{ height: 100 }}>Text 31</Text>
                        <Text style={{ height: 100 }}>Text 41</Text>
                        <Text style={{ height: 100 }}>Text 51</Text>
                        <Text style={{ height: 100 }}>Text 12</Text>
                        <Text style={{ height: 100 }}>Text 22</Text>
                        <Text style={{ height: 100 }}>Text 32</Text>
                        <Text style={{ height: 100 }}>Text 42</Text>
                        <Text style={{ height: 100 }}>Text 52</Text>
                    </ScrollView>

                    {/* The text input to put on top of the keyboard */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ ...styles.filed, flex: 0.7 }}>
                            <TextInput placeholder={'Enter your text!'} />
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text>SEND</Text>
                        </View>
                    </View>



                    {/* The view that will animate to match the keyboards height */}
                    <KeyboardSpacer topSpacing={ketBoardSpace} />
                </View>
            </SafeAreaView>
        );
    }
}
