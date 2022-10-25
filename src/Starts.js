import React, {useState, useContext} from 'react'
import { Text,SafeAreaView, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//Context
import ThemeContext from './context/ThemeContext';

export default function Start() {
    const colorScheme = useColorScheme();
    const theme = useContext(ThemeContext)


    return (
      <SafeAreaView style={{flex: 1,backgroundColor:theme.colors.background}}>
        <StatusBar/>
        <Text style={{color:theme.colors.base_text}}>Color scheme: {colorScheme}</Text>
      </SafeAreaView>
    );
  }