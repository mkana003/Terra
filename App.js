import React, {useState, useContext} from 'react'
import { useColorScheme } from 'react-native';
import Start from "./src/Starts";
import { Provider } from 'react-redux'
//Context
import ThemeContext from './src/context/ThemeContext';
//Redux-Saga
import store from './src/redux/store'
//Theme
import { lightTheme, darkTheme } from './src/styles/colors';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={colorScheme == 'light' ? lightTheme : darkTheme }>
        <Start/>
      </ThemeContext.Provider>
    </Provider>
  );
}

