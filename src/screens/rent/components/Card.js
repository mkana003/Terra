//Libraries
import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'

//Styles
import * as Colors from '../../../styles/colors'
import { x, y } from '../../../styles/styles'

export default function Card({item}) {


  return(
    <View style={{width:x(300), height:y(260), borderTopLeftRadius:x(30), borderTopRightRadius:x(30),marginRight:x(61),backgroundColor:Colors.background_color, ...styles.Shadow}}>
       <Image
            source={{uri:item.Image}}
            resizeMode="cover"
            style={{width:x(300),height:y(200),borderRadius: x(30)}}
        />
        <View style={{marginVertical: x(8)}}>
            <View style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal:x(8)}}>
                <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginHorizontal:x(8)}}>{item.Name}</Text>
                <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.dark_orange}}>{item.Price}</Text>                 
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal:x(8)}}>
                <Text style={{fontSize:x(13),fontFamily:"Montserrat" ,color:Colors.dark_green, marginLeft: x(8)}}>{item.Activity}</Text>             
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Shadow: {
       shadowColor: Colors.light_green,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:2
     }
  })