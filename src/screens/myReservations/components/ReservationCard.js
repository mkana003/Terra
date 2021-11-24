//Libraries
import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

//Styles
import * as Colors from '../../../styles/colors'
import { x, y, margin_left } from '../../../styles/styles'

export default function ReservationCard({item}) {
    
  return(
    <TouchableOpacity style={{flexDirection:"row",width:x(505), height:y(215), borderRadius:x(30),marginBottom:x(32),backgroundColor:Colors.background_color, borderWidth:1, borderColor: item.Status == "Live" ? Colors.dark_orange:Colors.dark_green, justifyContent:"space-between"}}>
        <View style={{justifyContent:"center", marginLeft:margin_left}}> 
            <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green}}>{item.Name}</Text>
            <View style={{flexDirection:"row", alignItems:"center", marginBottom:x(25)}}>
                <Image
                    source={require("../../../../assets/icons/location.png")}
                    resizeMode="contain"
                    style={{width:x(28),height:y(28),tintColor:Colors.dark_orange}}
                />
                <Text style={{fontSize:x(28),fontFamily:"Montserrat" ,color:Colors.light_green}}>{item.City}</Text>
            </View>
            <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.light_green}}>{item.Arrival}</Text>
            <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green}}>{item.End}</Text>
            <Text style={{fontSize:x(20),fontFamily:"Montserrat" ,color:item.Status == "Live" ? Colors.dark_orange:Colors.light_green}}>Status:{item.Status}</Text>
        </View>
        <Image
            source={{uri:item.Image}}
            resizeMode="cover"
            style={{width:x(160),height:y(215),borderRadius: x(30), alignSelf:"center"}}
        />
    </TouchableOpacity>
  )
}

