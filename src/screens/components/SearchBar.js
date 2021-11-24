//Libraries
import React from 'react'
import { View, Image, TextInput } from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y } from '../../styles/styles'

export default function SearchBar() {

  return(
    <View style={{flexDirection:"row",width: x(360), height: y(60), backgroundColor:Colors.search_background, borderRadius: x(30), alignItems:"center", justifyContent:"flex-start", paddingLeft: 5}}>
        <View style={{width: x(40), height: y(40), backgroundColor:Colors.background_color, borderRadius: x(20), marginRight: 8, alignItems:"center", justifyContent:"center"}}>
            <Image
                source={require("../../../assets/icons/search.png")}
                resizeMode="contain"
                style={{width:x(25),height:y(25),tintColor:Colors.light_green}}
            />
        </View>
        <TextInput placeholder="Buscar"/>
    </View>
  )
}