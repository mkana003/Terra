//Libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import Activities from '../../screens/activities/Activities'
import Book from '../../screens/book/components/Book';

export default function ActivitiesStack() {

  const ActivitiesStack = createNativeStackNavigator()

  return (
    <ActivitiesStack.Navigator screenOptions={{headerShown: false}}>
      <ActivitiesStack.Screen name="ActividadesScreen" component={Activities}/>
      <ActivitiesStack.Screen name="Book" component={Book}/>
    </ActivitiesStack.Navigator>
  )
}