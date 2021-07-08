import * as React from 'react';
import { StyleSheet, Text, View , SafeAreaView, Platform, StatusBar, ImageBackground, Image, TouchableOpacity, Linking, ScrollView} from 'react-native';
import axios from 'axios';

export default class DailyPic extends React.Component {
    constructor() {
        super();
        
        this.state = {
            info: ''
        }
    }

    getInfo = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=YsZClmDmTDQXv8iV1m9RqztgMYCPxY2w992ih7hN')
        .then(response => {
            this.setState({
                info: response.data
            })

            console.log(this.state.info)

        })

    }

    componentDidMount() {
        this.getInfo();
    }

    render() {
        let imageUrl = this.state.info.url
        return(
            <View style={styles.container}>
                
                <SafeAreaView style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}/>
                <ImageBackground source={require('../assets/dailyPic_bg.png')} style={{width: '100%', height: '100%'}}>
                <ScrollView>
                    <View style={styles.titleCon}>
                        <Text style={styles.titleText}>Daily Pic</Text>
                    </View>

                    <View style={styles.topicCon}>
                        <Text style={styles.topic}>{this.state.info.title}</Text>
                    </View>
                    
                    <View style={styles.explainCon}>
                        <Text style={styles.explanation}>{this.state.info.explanation}</Text>
                    </View>

                    <View style={styles.dailyPic}>
                        {this.state.info.media_type === 'image'
                        
                            ? <Image source={{uri: this.state.info.url}} style={{width: '100%', height: 400}}/>
                            
                            : <TouchableOpacity 
                            onPress = {() => Linking.openURL(this.state.info.url).catch(error => console.log('Coud not open page',error))}>
                                <Image source={require('../assets/play-video.png')}/>
                            </TouchableOpacity>
                        }
                    </View>
                    </ScrollView>
                </ImageBackground>
                
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

    titleCon: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleText: {
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    explainCon: {
        tintColor: '#ededed',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    explanation: {
        fontSize: 20,
        color: 'white'
    },

    topicCon: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    topic: {
        fontSize: 30,
        color: 'magenta',
        marginBottom: 30,
        marginTop: 30
    }
  });