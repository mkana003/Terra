//Libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import myReservation from '../../screens/myReservations/myReservations'

export default function myReservationsStack() {

  const myReservationsStack = createNativeStackNavigator()

  return (
    <myReservationsStack.Navigator screenOptions={{headerShown: false}}>
      <myReservationsStack.Screen name="Mis ReservacionesScreen" component={myReservation}/>
    </myReservationsStack.Navigator>
  )
}