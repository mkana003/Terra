//Libraries
import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y } from '../../styles/styles'

// MAIN
export default function Header() {

    return (
        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between",marginHorizontal: 10}}>
          <TouchableOpacity>
            <Image
                source={require("../../../assets/icons/search.png")}
                resizeMode="contain"
                style={{width:x(30),height:y(30),tintColor:Colors.light_green}}
            />
          </TouchableOpacity>       
          <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green}}>Explorar</Text> 
          <View style={{width:x(30),height:y(30),backgroundColor:Colors.background_color}}/>   
        </View>
    )
}