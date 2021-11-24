//Libraries
import React from 'react'
import {SafeAreaView, Text, FlatList} from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y,margin_left, margin_top } from '../../styles/styles'

//Components
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import LoadingAnimation from '../components/LoadingAnimation'
import { activities } from '../../data/data'
// MAIN
export default function Activities() {

  function HeaderItem({item}) {
    return (
      <MediumCard item={item} type={"actividades"}/>
    )
  }

  function BodyItem({item}) {
    return (
      <SmallCard item={item} type={"actividades"}/>
    )
  }

  return(
    <SafeAreaView style={{flex:1,backgroundColor:Colors.background_color}}>
      <Header/>
      <TopMenu/>
      <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginLeft: margin_left}}>Recomendado</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{height:y(600),marginTop:margin_top,marginLeft:margin_left}}
        data={activities}
        keyExtractor={(item) => item.ID}
        renderItem={HeaderItem}
        initialScrollIndex={0}
        ListEmptyComponent={<LoadingAnimation/>}
        pagingEnabled
      />
      <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginLeft: margin_left}}>Popular</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{marginTop: margin_top}}
        data={activities}
        keyExtractor={(item) => item.ID}
        renderItem={BodyItem}
        initialScrollIndex={0}
        numColumns={2}
        columnWrapperStyle={{justifyContent:"space-evenly"}}
      />
    </SafeAreaView>
  )
}