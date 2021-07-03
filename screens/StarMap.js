import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';

export default class StarMap extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Star Maps Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });