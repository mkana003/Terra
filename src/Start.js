//Libraries
import React from 'react'
import { View, StatusBar } from 'react-native'
import { useFonts } from 'expo-font';
//Styles
import * as Colors from './styles/colors'

//Components
import Navigator from './navigation/Navigator'
import LoadingAnimation from './screens/components/LoadingAnimation';

export default function Start() {

    const [loaded] = useFonts({
        MontserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
        Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
        MontserratLight:require('../assets/fonts/Montserrat-Light.ttf'),
    });
    
    if (!loaded) {
    return <LoadingAnimation/>;
    }
    
  return(
    <View style={{ flex: 1, backgroundColor: Colors.background_color }}>
      <StatusBar barStyle= 'dark-content' />
      <Navigator/>
    </View>
  )
}