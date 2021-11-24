//Libraries
import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'

//LottieFiles Animation JSON
import Camping from '../../../assets/animations/14287-compass-motion.json'

//Styles
import { x } from '../../styles/styles'

export default function LoadingAnimation() {
  const animation = useRef(null)

  useEffect(() => {
    animation.current.play()
  }, [])

  return (
    <View
      style={{
        width: x(600),
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}
    >
      <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={Camping}
      />
    </View>
  )
}