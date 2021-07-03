import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View , SafeAreaView, ImageBackground, Image} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}/>
                <ImageBackground source={require("../assets/stars.gif")} style={{width: '100%', height: '100%', flex: 1}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require("../assets/main-icon.png")} style={{width: 200, height: 200}}/>
                        <Text style={styles.heading}>Stellar App</Text>
                    </View>

                    <View style={styles.bnView}>
                        <TouchableOpacity
                            style={styles.navBns}
                            onPress={() => {
                                this.props.navigation.navigate("SapceCraft")
                            }}
                        >
                            <Text style={styles.bnText}>Space Crafts</Text>
                            <Image style={styles.bnImage} source={require("../assets/space_crafts.png")}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.navBns}
                            onPress={() => {
                                this.props.navigation.navigate("StarMap")
                            }}
                        >
                            <Text style={styles.bnText}>Star Map</Text>
                            <Image style={styles.bnImage} source={require("../assets/star_map.png")}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.navBns}
                            onPress={() => {
                                this.props.navigation.navigate("DailyPicture")
                            }}
                        >
                            <Text style={styles.bnText}>Daily Pics</Text>
                            <Image style={styles.bnImage} source={require("../assets/daily_pictures.png")}></Image>
                        </TouchableOpacity>
                    </View>

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

    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white'
    },

    bnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    navBns: {
        justifyContent: 'center',
        width: '85%',
        height: '20%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        margin: 50,
        marginBottom: 0
    },  

    bnText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'magenta',
        alignSelf: 'center'
    },

    bnImage: {
        position: 'absolute',
        width: 90,
        height: 90,
        top: -10,
        right: -10
    }
  });