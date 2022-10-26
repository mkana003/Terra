import React, {useState, useContext, useCallback, useEffect} from 'react'
import { Text,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
//Start Functions
import loadFonts from './start/loadFonts'
//Context
import ThemeContext from './context/ThemeContext';

export default function Start() {
    const theme = useContext(ThemeContext)
    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await loadFonts()
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


    return (
      <View 
        style={{flex: 1,backgroundColor:theme.colors.background, justifyContent:'center'}}
        onLayout={onLayoutRootView}  
      >
        <StatusBar/>
      </View>
    );
  }