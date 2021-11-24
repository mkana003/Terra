//Libraries
import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
//Styles
import * as Colors from '../../styles/colors'
import { x, y } from '../../styles/styles'

export default function SmallCard({item, type}) {

    const navigation = useNavigation();

    function move() {
        navigation.navigate('Book',
        {
          item:item,
          type:type,
        })
    }

  return(
    <TouchableOpacity 
        style={{width:x(240), height:y(260), borderTopLeftRadius:x(30), borderTopRightRadius:x(30),marginBottom:x(48),backgroundColor:Colors.background_color, ...styles.Shadow}}
        onPress={() => {move()}}     
    >
       <Image
            source={{uri:item.Image}}
            resizeMode="cover"
            style={{width:x(240),height:y(200),borderTopLeftRadius:x(30), borderTopRightRadius:x(30)}}
        />
        <View style={{marginVertical: x(8)}}>
            <Text style={{fontSize:x(20),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginHorizontal:x(8)}}>{item.Name}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal:x(8)}}>
                <View style={{flexDirection:"row"}}>
                    <Image
                        source={require("../../../assets/icons/location.png")}
                        resizeMode="contain"
                        style={{width:x(15),height:y(15),tintColor:Colors.dark_orange}}
                    />
                    <Text style={{fontSize:x(13),fontFamily:"Montserrat" ,color:Colors.dark_green, marginLeft: x(4)}}>{item.City}</Text>
                </View>
                {type == "reservar" && (
                <View style={{flexDirection:"row"}}>
                    <Image
                        source={require("../../../assets/icons/FogataComplete.png")}
                        resizeMode="contain"
                        style={{width:x(15),height:y(15),tintColor:Colors.dark_orange}}
                    />
                    <Text style={{fontSize:x(13),fontFamily:"MontserratLight" ,color:Colors.dark_green}}>{item.Grade}</Text>
                </View>
                )}
            </View>
        </View>
    </TouchableOpacity>
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