//Libraries
import React, {useState,  useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Image} from 'react-native'

//Styles
import * as Colors from '../../../styles/colors'
import { x, y } from '../../../styles/styles'

export default function Filter() {

  const [selected, setSelected] = useState(false)

  return(
    <TouchableOpacity
        style={[selected == true ? styles.FilterSelected : styles.FilterContainer]}
        onPress={() => setSelected(!selected)}
    >
        <Image
            source={require("../../../../assets/icons/filtrar.png")}
            resizeMode="contain"
            style={{width:x(40),height:y(40),tintColor:Colors.middle}}
        />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    FilterContainer: {
       width:x(60),
       height:y(60),
       borderRadius:x(30),
       backgroundColor:Colors.light_green,
       justifyContent:"center",
       alignItems:"center",
       shadowColor: Colors.dark_green,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:2
     },
     FilterSelected: {
        width:x(60),
        height:y(60),
        borderRadius:x(30),
        backgroundColor:Colors.dark_orange,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: Colors.light_orange,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:2
     }
})