//Libraries
import React from 'react'
import {SafeAreaView,Text, View, FlatList} from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top } from '../../styles/styles'

//Components
import Header from '../components/Header'
import TopMenu from '../components/TopMenu'
import Card from './components/Card'
import LargeCard from './components/LargeCard'
import { rent, equipment } from '../../data/data'
// MAIN
export default function Rent() {

  function HeaderItem({item}) {
    return (
      <Card item={item}/>
    )
  }

  function BodyItem({item}) {
    return (
      <LargeCard item={item}/>
    )
  }

  return(
    <SafeAreaView style={{flex:1, backgroundColor:Colors.background_color}}>
       <Header/>
       <TopMenu/>
       <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginLeft: margin_left}}>Recomendado</Text>
       <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height:y(600),marginTop:margin_top,marginLeft:margin_left}}
          data={rent}
          keyExtractor={(item) => item.ID}
          renderItem={HeaderItem}
          initialScrollIndex={0}
          pagingEnabled
      />
      <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, marginLeft: margin_left}}>Popular</Text>
       <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop:margin_top}}
          contentContainerStyle={{alignItems:"center"}}
          data={equipment}
          keyExtractor={(item) => item.ID}
          renderItem={BodyItem}
          initialScrollIndex={0}
          pagingEnabled
      />
    </SafeAreaView>
   
  )
}