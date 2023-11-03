import { ScrollView, Text, View} from 'react-native'
import styles from '../styles/homepage.style'
import Categories from '../components/categories'
import Header from '../components/header'
import Discovers from '../components/discovers'
import Agents from '../components/agents'
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'
import Cities from '../components/cities'
SplashScreen.preventAutoHideAsync();


export default function Home() {
  const [fontsLoaded] = useFonts({
    popRegular : require('../assets/fonts/Poppins-Regular.ttf'),
    popMedium : require('../assets/fonts/Poppins-Medium.ttf'),
    popSemibold : require('../assets/fonts/Poppins-SemiBold.ttf'),
    popBold : require('../assets/fonts/Poppins-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])
  
  if(!fontsLoaded) return null
  return (

    <ScrollView style={{backgroundColor:"#FAFAFA", paddingHorizontal: 24, paddingTop: 32}} onLayout={onLayoutRootView}>
      <Header/>
      <Categories/>
      <Discovers/>
      <Agents/>
      <Cities/>
    </ScrollView>
  )
}