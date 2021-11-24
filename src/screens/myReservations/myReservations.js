//Libraries
import React from 'react'
import {Text, SafeAreaView, FlatList} from 'react-native'

//Styles
import * as Colors from '../../styles/colors'
import { x, y, margin_left, margin_top } from '../../styles/styles'

//Components
import ReservationCard from './components/ReservationCard'
import { reservations } from '../../data/data'
// MAIN
export default function myReservations() {

  function renderItem({item}) {
    return (
      <ReservationCard item={item}/>
    )
  }

  return(
    <SafeAreaView style={{flex:1, backgroundColor:Colors.background_color}}>
       <Text style={{fontSize:x(38),fontFamily:"MontserratSemiBold" ,color:Colors.dark_green, alignSelf:"center"}}>Mis Reservaciones</Text>
       <FlatList
          showsVerticalScrollIndicator={false}
          style={{marginTop:margin_top}}
          contentContainerStyle={{alignItems:"center"}}
          data={reservations}
          keyExtractor={(item) => item.ID}
          renderItem={renderItem}
          initialScrollIndex={0}
          pagingEnabled
        />
    </SafeAreaView>
   
  )
}