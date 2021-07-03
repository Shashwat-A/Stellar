import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCraft from './screens/SpaceCrafts';
const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "HomeScreen" screenOptions = {{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
        <Stack.Screen name="DailyPicture" component={DailyPic}/>
        <Stack.Screen name="SapceCraft" component={SpaceCraft}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
