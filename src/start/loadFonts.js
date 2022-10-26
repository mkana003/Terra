import * as Font from "expo-font"

export default async () => {
  await Font.loadAsync({
    MontserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat: require('../../assets/fonts/Montserrat-Regular.ttf'),
    MontserratLight:require('../../assets/fonts/Montserrat-Light.ttf'),
  })
}