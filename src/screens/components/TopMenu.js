//Libraries
import React, {useState,  useEffect} from 'react';
import { TouchableOpacity, StyleSheet, Image, Text, FlatList} from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top } from '../../styles/styles'

import { top_menu } from '../../data/data'

export default function TopMenu() {

    const [selected, setSelected] = useState("Todas");

    function MenuItem({item}) {
        return (
        <TouchableOpacity
            style={{width:x(110),height:y(120),alignItems:"center",marginRight:x(20)}}
            onPress={() => setSelected(item.Name)}
        >
            <Image
                source={{uri:item.Image}}
                resizeMode="cover"
                style={{width:x(110),height:y(110),borderRadius:x(55), borderWidth:2, borderColor: selected == item.Name ? Colors.dark_orange : Colors.light_green}}
            />
            <Text style={{fontSize:x(15),fontFamily:"MontserratSemiBold" ,color:selected == item.Name ? Colors.dark_orange : Colors.light_green, marginTop:x(5)}}>{item.Name}</Text>
        </TouchableOpacity>
        )
      }

    return(
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ height:y(300),marginTop:margin_top,marginLeft:margin_left}}
        data={top_menu}
        keyExtractor={(item) => item.ID}
        renderItem={MenuItem}
        initialScrollIndex={0}
        pagingEnabled
      />
    )
}