//Libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import Home from '../../screens/book/Home'
import Book from '../../screens/book/components/Book';

export default function BookStack() {

  const BookStack = createNativeStackNavigator()

  return (
    <BookStack.Navigator screenOptions={{headerShown: false}}>
      <BookStack.Screen name="Home" component={Home}/>
      <BookStack.Screen name="Book" component={Book}/>
    </BookStack.Navigator>
  )
}