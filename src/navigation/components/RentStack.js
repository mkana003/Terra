//Libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import Rent from '../../screens/rent/Rent'

export default function RentStack() {

  const RentStack = createNativeStackNavigator()

  return (
    <RentStack.Navigator screenOptions={{headerShown: false}}>
      <RentStack.Screen name="RentarScreen" component={Rent}/>
    </RentStack.Navigator>
  )
}