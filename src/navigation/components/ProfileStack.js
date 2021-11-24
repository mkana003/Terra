//Libraries
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen
import Profile from '../../screens/profile/Profile'

export default function ProfileStack() {

  const ProfileStack = createNativeStackNavigator()

  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="PerfilScreen" component={Profile}/>
    </ProfileStack.Navigator>
  )
}