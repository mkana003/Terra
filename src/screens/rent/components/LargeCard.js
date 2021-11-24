//Libraries
import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'

//Styles
import * as Colors from '../../../styles/colors'
import { x, y, margin_left } from '../../../styles/styles'

export default function LargeCard({item}) {

  return(
    <View style={{flexDirection:"row",width:x(440), height:y(202), borderRadius:x(30),marginBottom:x(68),backgroundColor:Colors.background_color, ...styles.Shadow}}>
        <View style={{width:x(270),justifyContent:"center", marginLeft:margin_left}}>
            <Text style={{fontSize:x(32),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green}}>{item.Name}</Text>
            <Text style={{fontSize:x(16),fontFamily:"MontserratLight" ,color:Colors.base_text}}>{item.Description}</Text>
            <Text style={{fontSize:x(20),fontFamily:"Montserrat" ,color:Colors.light_green}}>{item.Activity}</Text>
            <Text style={{fontSize:x(28),fontFamily:"MontserratSemiBold" ,color:Colors.dark_orange, marginTop:x(15)}}>{item.Price}</Text>
        </View>
        <Image
            source={{uri:item.Image}}
            resizeMode="cover"
            style={{width:x(180),height:y(180),borderRadius: x(90), alignSelf:"center"}}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    Shadow: {
       shadowColor: Colors.light_green,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:2
     }
  })