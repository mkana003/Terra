// Libraries
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top } from '../../styles/styles'

const BookButton = () => {

    return (
      <TouchableOpacity
        style={{height: y(60),width: x(300),borderRadius:x(50) ,backgroundColor:Colors.light_green, justifyContent:"center", alignItems:"center", ...styles.Shadow}}
      >
        <Text style={{fontSize:x(32),fontFamily:"MontserratSemiBold" ,color:Colors.middle}}>Reservar</Text>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    Shadow: {
       shadowColor: Colors.dark_green,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:2
     }
  })
  
  export default BookButton

