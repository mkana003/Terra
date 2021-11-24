// Libraries
import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top } from '../../styles/styles'

const BackButton = () => {

    const navigation = useNavigation();
  
    return (
      <TouchableOpacity
        style={{height: y(50),width: x(50), marginTop:x(70), marginLeft:margin_left}}
        onPress={() => {navigation.goBack()}}
      >
        <Image
            source={require("../../../assets/icons/back.png")}
            resizeMode="contain"
            style={{width:x(50),height:y(50),tintColor:Colors.middle}}
        />
      </TouchableOpacity>
    );
  };
  
  export default BackButton