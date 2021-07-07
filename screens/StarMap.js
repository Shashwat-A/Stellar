import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview'

export default class StarMap extends React.Component {
    constructor() {
        super();

        this.state={ 
            long: '',
            lat: '',
        }
    }

    

    render() {
        const path = "https://virtualsky.lco.global/embed/index.html?longitude="+ this.state.long + "&latitude="+ this.state.lat +"&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
        return(
            <View style={{backgroundColor: '#551f9c', flex: 1}}>
                    <Text style={{alignSelf: 'center', fontSize: 40, color: 'white', fontWeight: 'bold', marginBottom: 20}}>Star Maps Screen</Text> 

                    <TextInput
                        style={styles.input}
                        placeholder= "Enter Your Longitude"
                        onChangeText= {(text)=> {
                            this.setState({
                                long: text
                            })
                        }}
                        value={this.state.long}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder= "Enter Your Latitude"
                        onChangeText= {(text)=> {
                            this.setState({
                                lat: text
                            })
                        }}
                        value={this.state.lat}
                    />

                    <WebView
                        scalesPageToFit= {true}
                        source={{uri: path}}
                        style={{marginTop: 20, marginBottom: 20}}
                    />

                    {console.log('show')}
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

    inputView: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        width: '80%',
        height: '8%',
        borderWidth: 2,
        borderRadius: 250,
        margin: 10,
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center'
    }
  });